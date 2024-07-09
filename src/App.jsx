import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CheckOut from './pages/CheckOut/CheckOut';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <div className=" font-bodyFont">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App;
