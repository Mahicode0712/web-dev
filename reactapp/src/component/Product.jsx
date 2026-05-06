import React, { useEffect, useState } from 'react'
import axios from "axios"
function Product() {
    const [products, setProducts]=useState([])
    const[skip, setSkip]=useState(0)
    useEffect(() => {
        const getProducts=async()=>{
            const response=await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`)
            console.log(response.data.products)
            setProducts(response.data.products)

        }
        getProducts()
    },[skip])
  return (
    <div>
     <h2> Product Page</h2>
     {products.map((product)=>{
        return (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
            </div>
        )
     })}
     <button className='bg-amber-700 m-5' onClick={()=>{
        if(skip>0)setSkip(skip-10)
     }}>Prev</button>
     <button className='bg-amber-700 m-5' onClick={()=>{
        if(skip<194)setSkip(skip+10)
     }}>Next</button>
    </div>
  )
}

export default Product