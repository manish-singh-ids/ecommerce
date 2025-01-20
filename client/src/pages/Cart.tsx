import React from 'react'
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {

  const {cart} = useSelector((state: RootState) => state.cart);

  console.log(cart)
    return (
        <div className='min-h-screen bg-gray-400 justify-center items-center flex text-center text-red-700 text-5xl'>
            {cart.map((product, index) => {
                return (
                    <div>product.name</div>
                   <img src={product.imageUrl} alt={product.name} />
                )
            })}
            <div>
                
            </div>
        </div>
    )
}

export default Cart