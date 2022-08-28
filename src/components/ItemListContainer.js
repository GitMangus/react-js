import * as React from 'react';
import ItemCard from './ItemCard';

const ItemListContainer = () => {

    const products = [
        {
            id:1,
            img: './assets/food/pedigree-perro.jpg',
            name: "PEDIGREE",
            description: "Alimento Pedigree cachorro sano crecimiento",
            price: "8500",
            stock: 10
        },
        {
            id:2,
            img: './assets/food/dogchow-perro.jpg',
            name: "DOG CHOW",
            description: "Alimento Dog Chow cachorros medianos y grandes",
            price: "7920",
            stock: 8
        },
        {
            id:3,
            img: './assets/food/purina-gato.jpg',
            name: "Cat Chow",
            description: "Alimento Cat Chow adulto pescado y mariscos",
            price: "9030",
            stock: 6
        },
        {
            id:4,
            img: './assets/food/raza-perro.png',
            name: "RAZA",
            description: "Alimento Raza adulto sabor carne",
            price: "6000",
            stock: 5
        }
    ]

    return(
         <div>
           {
            products.map(product => (
                <ItemCard key={product.id} imagen={product.img} nombre={product.name} descripcion={product.description} precio={product.price} stock={product.stock}/>
            ))
           }
         </div> 
    )
}

export default ItemListContainer;