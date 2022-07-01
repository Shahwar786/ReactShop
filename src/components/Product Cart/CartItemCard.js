import { BsFillBagCheckFill } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const CartItemCard = ({ handleShow}) => {
    const { cart } = useCart();
    const { auth } = useAuth();
    let price = 0;

    // price 
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].discount) {

            price += (cart[i].price - parseInt(cart[i].discount)) * (cart[i].pdQuantity);
        } else {
            price += (cart[i].price - 0) * (cart[i].pdQuantity);

        }

    }
    
    return (
        <>
            {
                auth.currentUser && (
                    <div className='bg-violet-600 text-white  hidden lg:flex py-4 px-2  fixed z-40 top-2/4 right-0 rounded-tl-md rounded-bl-md shadow-xl  flex-col space-y-2 cursor-pointer' onClick={handleShow}>
                        {/* items  */}
                        <div className='text-white flex items-center space-x-1 justify-center'>
                            <BsFillBagCheckFill />
                            <span className="text-sm">{cart.length} items</span>
                        </div>

                        {/* price  */}
                        <div className='bg-white rounded-md px-2 py-2 text-gray-600 flex justify-center text-sm'>
                            <span>$ {price?.toFixed(2)}</span>
                        </div>
                    </div>
                )
            }
        </>
      
    )
}

export default CartItemCard
