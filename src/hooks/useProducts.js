import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const useProducts = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    //console.log(categoryId)

    useEffect(() => {
        setLoading(true);
        //Paso 1: Armar la ref (sync)
        const productosRef = collection(db, 'productos')
        const q = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef

        //Paso 2: Consumir la ref (async)
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return ({
        productos, loading
    })
}

export default useProducts