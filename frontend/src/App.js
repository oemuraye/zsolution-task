import React from 'react'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import ProductDetails from './components/productDetails/ProductDetails'
import UserPost from './components/userPosts/UserPosts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    // BEM
    <BrowserRouter>
    <div className='App'>
      <Routes>
          <Route path="/" exact element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/login" exact element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/details" exact element={
            <>
              <Header />
              <ProductDetails />
              <Footer />
            </>
          } />
          <Route path="/myPosts" exact element={
            <>
              <Header />
              <UserPost />
              <Footer />
            </>
          } />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
