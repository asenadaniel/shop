import React, { useEffect, useContext, useState } from 'react';
import { Fruits, RT, Vegtables } from '../../assets/assets';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import { ProductContext } from '../../Context/productContext';
import Footer from '../Footer/Footer';
import './productDetails.css'

function ProductDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { addToCart } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const findProductById = (productId) => {
    let product = Fruits.find(item => item.id === parseInt(productId));
    if (product) return product;

    product = RT.find(item => item.id === parseInt(productId));
    if (product) return product;

    product = Vegtables.find(item => item.id === parseInt(productId));
    return product;
  };

  const product = findProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => {
    setQuantity(prev => {
      if (prev > 1) {
        addToCart(product, -1);
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="bg-cover ">

      <div className="flex xl:py-[4%] py-[10%] md:px-[26%] px-[3%] flex-col background relative">
        <div className='xl:px-[16%] flex flex-col gap-9 bg  bg-green-100  px-[6%] py-[9%] xl:py-[12%] '>
          <h1 className=' text-4xl text-center'>Product</h1>
          <div className=' flex justify-between items-center'>
            <Link to={'/'}>
              <div className='bg-green-900 w-fit px-3 py-2 text-white'>
                <ArrowBack />
              </div>
            </Link>
            <Link to={'/checkout'}>
              <div className=' text-white cursor-pointer bg-green-800 px-3 py-2'>
                <ShoppingCart className=' cursor-pointer' />
              </div>
            </Link>
          </div>
          <img src={product.img} alt={product.name} className='w-full object-cover xl:h-[300px] h-[200px]' />
          <div className='flex justify-between'>
            <p className='font-semibold xl:text-[25px]'>{product.name}</p>
            <p className='font-semibold text-green-900 xl:text-[20px]'>{product.price * quantity}NGN per piece</p>
          </div>

          <p className='bg-[#B2FBD2] xl:px-5 w-full rounded-3xl flex justify-between px-5'>How do you like your produce? <span className='text-[#8B0C0C]'>Required</span></p>

          <div className='flex flex-col gap-9'>
            <div className='border-b-2 border-solid border-b-[#53de8f] flex gap-5'>
              <input type="checkbox" id="uncut" name="cutting-preference" className='text-green-900' />
              <label htmlFor="uncut">Uncut</label>
            </div>
            <div className='border-b-2 border-solid border-b-[#53de8f] flex gap-5'>
              <input type="checkbox" id="cut" name="cutting-preference" />
              <label htmlFor="cut">Cut</label>
            </div>
            <div className='border-b-2 border-solid border-b-[#53de8f] flex gap-5'>
              <input type="checkbox" id="frozen" name="cutting-preference" />
              <label htmlFor="frozen">Frozen</label>
            </div>
          </div>

          <div className='flex w-full justify-between '>
            <div className='flex justify-center items-center'>
              <button className='font-semibold bg-green-300 xl:px-7 px-4 py-3 rounded-bl-xl' onClick={decrementQuantity}>-</button>
              <p className='text-[#B2FBD2] bg-green-800 xl:px-7 px-5 py-3'>{quantity}</p>
              <button className='font-semibold bg-green-300 px-4    xl:px-7 py-3 rounded-br-xl' onClick={incrementQuantity}>+</button>
            </div>
            <button className='bg-green-900 xl:px-7 px-3 rounded-br-xl rounded-bl-xl py-1 text-white' onClick={handleAddToCart}>Add {quantity} item(s) to cart</button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
