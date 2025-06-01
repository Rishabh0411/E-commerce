import React from 'react'

const Header = () => {
    console.log("Header rendered!");
  return (
   <header className="py-5" style={{ backgroundColor: '#6050DC'}}>    
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
      <h1 className="display-4 fw-bold">Welcome to Shoppit</h1>
      <p className="lead fw-normal text-white-75 mb-4">Your one-stop shop for everything you need!</p>
      <a href="#products" className="btn btn-light rounded-pill px-4 py-2">Shop Now</a>
    </div>
    </div>
  </header>
  )
}

export default Header
