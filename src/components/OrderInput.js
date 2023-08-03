import React from 'react'
import { Link, Navigate } from 'react-router-dom';

const OrderInput = () => {
    
    const handleOrder = (e) => {
        e.preventDefault();
        const order = {
          name:e.target.name.value,
          email:e.target.email.value,
          product:e.target.product.value,
          price:e.target.price.value,

          quentity:e.target.quentity.value,
            address: e.target.address?.value,
            phone: e.target.phone?.value,

        }
        console.log(order)
    }
    return (
        <div className='lg:max-w-screen '>
            <div className="lg:flex justify-between  items-center lg:mx-8 lg:mt-4 my-3 flex ">
                <div>
                    <h1 className='text-2xl text-gray-800 font-bold'>Order Product</h1>
                </div>
            </div>
            <form onSubmit={handleOrder}>
                <div className= ' lg:h-screen bg-white px-4 pt-3 pb-4 rounded-sm text-black font-bold'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-12 w-72 lg:w-full lg:rounded-sm lg:mt-3 '>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" name='name'  placeholder="name" className="input input-bordered text-black " required  />
                        </div>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="text" name='email'  placeholder="Email" className="input input-bordered text-black" required  />
                        </div>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text ">Mobile Number</span>
                            </label>
                            <input type="number" name='phone'  placeholder="Mobile Number" className="input input-bordered text-black" required  />
                        </div>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text ">Product Name</span>
                            </label>
                            <input type="text" name='product'  placeholder="Product Name" className="input input-bordered text-black" required  />
                        </div>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price'  placeholder="Price" className="input input-bordered text-black" required  />
                        </div>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text ">Product Quentity</span>
                            </label>
                            <input type="number" name='quentity'  placeholder="Product Quentity" className="input input-bordered text-black" required  min="1" max="10"/>
                        </div>
                        <div className="form-control lg:w-96">
                            <label className="label">
                                <span className="label-text ">Address</span>
                            </label>
                            <input type="text" name='address'  placeholder="Address" className="input input-bordered text-black" required  />
                        </div>
                       
                        <div className="form-control lg:mt-9">
                                <button className="btn btn-outline btn-primary hover:no-underline">
                                   Order
                                    </button >
                            </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default OrderInput