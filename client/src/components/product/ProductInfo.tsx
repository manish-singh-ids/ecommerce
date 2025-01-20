import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { addToCart } from '../../redux/cart/cart.action';

const ProductInfo: React.FC = () => {
  const { selectedProduct, loading, error } = useSelector((state: RootState) => state.product);
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart)

  const dispatch = useDispatch()

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-slate-900  text-white text-center flex flex-col justify-start items-center p-4">
      {/* <div className="bg-gray-900 p-4 rounded-lg text-center flex justify-evenly items-center w-full min-h-screen "> */}
      <div className='bg-black flex gap-5 w-full  justify-center rounded-3xl p-12'>

        <div className='flex flex-col justify-center items-center gap-6'>
          <h1 className="text-6xl font-semibold">{selectedProduct?.name}</h1>
          <img
            src={selectedProduct?.imageUrl}
            alt={selectedProduct?.name}
            className="object-cover  mx-auto text-center rounded-md mt-4 w-full"
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className="text-lg mt-2 opacity-60">{selectedProduct?.description}</h2>
          <div className="mt-2">
            <span className="font-bold">Reviews:</span> {selectedProduct?.reviews}
          </div>
          <div className="mt-2">
            <span>Availability: </span>
            <span className={`${selectedProduct?.availabilityStatus.toLowerCase().trim() === "out of stock" ? `text-red-500` : `text-white`} font-bold`}>{selectedProduct?.availabilityStatus}</span>
          </div>
          <div className='w-full mt-8'>
            <button
              className='px-7 py-4 bg-white text-black rounded-lg active:scale-95 active:shadow-lg shadow-[6px_8px_0px_2px_rgba(255,_234,_0,_1)]'
              onClick={() => dispatch(addToCart(selectedProduct))}>
              Add to Cart</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ProductInfo;
