import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Navigate } from 'react-router-dom'
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'
import useForm from '../../hooks/useForm'
import './Checkout.css';
import { Button } from '@mui/material'

const Checkout = () => {

    const { cart, cartTotal, finishPurchase } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
        fecha: new Date()
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }


        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            finishPurchase()
                        })
                })
        } else {
            alert("Hay items sin stock")
        }
    }

    if (orderId) {
        return (
            <div className='ckeckout__success'>
                <h2>¡Compra exitosa!</h2>
                <hr />
                <p>Número de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='checkout'>
            <h2 className='checkout__title'>
                Checkout
            </h2>

            <h3 className='checkout__sub'>Ingresa tu mail para continuar la compra.</h3>
            <h3 className='checkout__subt'>Rápido. Fácil. Seguro.</h3>

            <form onSubmit={handleSubmit} className="checkout__form">
                <input
                    className="checkout__input"
                    name='nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder="Nombre"
                />

                <input
                    className="checkout__input"
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    type={'email'}
                    placeholder="Email"
                />

                <input
                    className="checkout__input"
                    name='direccion'
                    value={values.direccion}
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder="Dirección"
                />

                <Button
                    className="checkout__button"
                    type="submit"
                    variant="contained">
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default Checkout