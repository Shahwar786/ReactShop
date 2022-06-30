import CartPdCard from "../components/Product Cart/CartPdCard";
import useCart from "../hooks/useCart";

const CartDetailsPage = () => {
    const { cart } = useCart();
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
    <div>
        <h1 className="text-xl text-gray-700 font-semibold text-center">Cart</h1>

        <div className="w-3/5 mx-auto">
              {/* carts  */}
              {cart?.length > 0 ? (
                  <>
                      <div className=" h-3/4 overflow-y-scroll cart-container py-6 ">
                          {cart.map((item) => {
                              return <CartPdCard {...item} />;
                          })}
                      </div>
                  </>
              ) : (
                  <>
                      <div className="h-3/4 flex flex-col justify-center items-center">
                          <h1>Empty Cart</h1>
                      </div>
                  </>
              )}
        </div>

          <div className="w-3/5 mx-auto bg-violet-600 text-white rounded-md mt-6 py-6 px-3">
            <div className="flex items-center justify-between">
                <h2>Total</h2>
                  <h2>{cart.length} items</h2>
                  <h2>$ {price?.toFixed(2)}</h2>
            </div>
        </div>


    </div>
  )
}

export default CartDetailsPage 