import React from 'react'
import { Link } from 'react-router-dom'
const backGround= 'https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#query=404%20page&position=1&from_view=keyword&track=ais'
const NotFound = () => {
  return (
    <div className="hero lg:min-h-screen" style={{
        background: `url(https://images.unsplash.com/photo-1591051270770-b268b0189078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80)`,
        backgroundSize: "cover"
    }}>
        <div className="text-center">
            <h1 className="text-7xl font-bold text-orange-700">404</h1>
            <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
            <p className="text-lg text-white mt-2 text-warning">A Laptop mechanic<br /> made me think about an important factor <br />of the customer experience in digital products.</p>
            <button class="btn btn-outline btn-warning my-5">
                <Link className='hover:no-underline' to="/home">Back To Home</Link>
            </button>
        </div>
    </div>
  )
}

export default NotFound