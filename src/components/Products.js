import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle  } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { getOrderStatus } from './lib/helpers'
import { format } from 'date-fns'

const Products = () => {
  const [service, setService] =useState([])
  useEffect(()=>{
    const url = `http://localhost:5000/product`
    fetch(url).then(res => res.json())
    .then(data =>{
      console.log(data)
      setService(data)})
  },[])
  return (
    <div className='lg:max-w-screen'>
      <div className="lg:flex justify-between  items-center lg:mx-8 lg:mt-4 my-3 flex">
        <div>
        <h1 className='text-2xl text-gray-800 font-bold'>Products Managment</h1>
        </div>
      </div>


      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<div className="border-x w-80 lg:w-full border-gray-200 lg:rounded-sm lg:mt-3 overflow-x-auto">
				<table className="lg:w-full text-gray-700 table table-lg ">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product ID</th>
							<th>Image</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Description</th>
							<th>Order Status</th>
						</tr>
					</thead>
					<tbody>
						{service.map((order, index) => (
							<tr key={order._id}>
								<td>
									<Link to={`/order/${order._id}`}>#{order.index}</Link>
								</td>
								<td>
									<Link to={`/product/${order._id}`}>#{order._id}</Link>
								</td>
                <td>
                  <img src={order.image} className='w-32' alt="" />
                </td>
								<td>
									{order.name}
								</td>
							
								<td className='font-bold text-lg'>
                 ${order.price}
                  </td>
								<td className='text-sm'>{order.description}</td>
								<td>
                  <button>
					<Link  className='btn btn-primary hover:no-underline ' to='/home/product/order'>Order</Link>
					</button>
                </td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
    </div>
  )
}

export default Products