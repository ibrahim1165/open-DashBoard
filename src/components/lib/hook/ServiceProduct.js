import React, { useEffect, useState } from 'react'

export const ServiceProduct =()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      const url = `http://localhost:5000/product`
      fetch(url)
      .then(res=>res.json())
      .then(data=>setProducts(data))
      
    },[])
    return [products, setProducts]
  }

export default ServiceProduct