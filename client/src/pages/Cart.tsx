import React, { useEffect, useState } from 'react'
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
    const { cart } = useSelector((state: RootState) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0.00)

    useEffect(() => {
        const getTotalPrice = () => {
            const total = cart.reduce((acc, val) => acc + parseFloat(val.price), 0);
            setTotalPrice(total)
        };

        getTotalPrice();
    }, [cart]);


    const formattedTotalPrice = totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    return (
        <>
            <div className='min-h-screen bg-gray-400 justify-start items-start flex flex-col text-white text-5xl gap-4'>
                {cart.map((product, index) => {
                    return (
                        <div key={index} className='bg-black p-6 flex justify-between items-center w-full gap-4 mt-5'>
                            <div className='flex items-center justify-center gap-4'>
                                <img src={product.imageUrl} alt={product.name} className='w-32 h-32' />
                                <div>{product.name}</div>
                            </div>
                            <div>
                                <span>{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                            </div>
                        </div>
                    )
                })}

                <div className='flex flex-col gap-6 justify-end items-end w-full mt-4 bg-white text-black p-4 '>
                    <span>Total : {formattedTotalPrice}</span>
                    <button className='bg-black text-white px-4 py-2 rounded-md active:scale-95'>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Cart;
