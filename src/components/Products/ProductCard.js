// import axios from "axios";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
// import swal from "sweetalert";
// import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const ProductCard = (props) => {
    const [tempPd, setTempPd] = useState([]);
    const [changeCartBtn, setCartBtn] = useState(true);
    const { handleClick, cart } = useCart();
    const { _id, name, price, img, discount, color } = props;
    const priceInNum = parseInt(price);
    let disCountedPrice;
    if (discount) {
        disCountedPrice = priceInNum - parseInt(discount);
    } else {
        disCountedPrice = priceInNum - 0
    }
    const image = img.split(",");
    const pdColor = color?.split(",");
    const newProduct = { ...props };
    newProduct["pdQuantity"] = 1;
    newProduct["pdColor"] = pdColor?.[0];
    // const navigate = useNavigate();
    // const savedPrice = price - disCountedPrice;
    // const findPd = cart?.find((item) => item._id === _id);
    // const { newUser } = useAuth();

    // //handle add to cart
    const handleCart = () => {
        handleClick(newProduct);
        setTempPd([...tempPd, newProduct]);
        localStorage.setItem("cart", JSON.stringify(tempPd));
    };


    // //loading order
    // React.useEffect(() => {
    //     axios
    //         .get(`https://powermall-api.herokuapp.com/orders?email=${newUser?.email}`)
    //         .then((res) => {
    //             setPd(res.data?.map((item) => item));
    //         });
    // }, [newUser?.email]);


    //handle wishlist product
   
    return (
        <>
            <div className="rounded-md p-4 box-border w-full  transition duration-500 h-84 flex flex-col justify-between hover:shadow-xl bg-gray-50 border border-gray-300 border-1 relative">
                <div>
                    {/* discount badge  */}
                   
                            
                                {/* <div className="flex left-0 top-4 z-20 absolute">
                                    <span className="px-2 py-1 text-xs bg-violet-600 text-center text-white rounded-tr-full rounded-br-full">
                                        Save: {savedPrice?.toFixed(0)}$
                                    </span>
                                </div> */}
                            
                        
                    
                    {/* image  */}
                   
                        <div
                            className="cursor-pointer h-40 mt-5"
                        // onClick={() => navigate(`/shops/${_id}/`)}
                        >
                            <img
                                className="w-48 h-full  mx-auto object-contain hover:opacity-80"
                                src={image?.[0]}
                                alt={_id}
                            />
                        </div>
                


                    <div className="flex flex-col flex-grow mt-3 border-t border-gray-200  space-y-1">
                      

                            <h1
                                className="text-sm pt-2 md:text-sm lg:text-sm text-gray-700 font-semibold cursor-pointer hover:underline hover:text-primary truncate"
                            // onClick={() => navigate(`/shops/${_id}`)}
                            >
                                {name}
                            </h1>

                        {/* <p className="text-xs md:text-sm lg:text-sm text-gray-500">{quantity}pc(s) </p> */}

                       
                            <>
                                <div className="flex flex-col justify-end">
                                    <div className="flex flex-row md:flex-row lg:flex-row justify-between md:items-center lg:items-center pt-2">
                                        {/* price  */}
                                        <div className="flex flex-row space-x-1 items-center">
                                            <h2 className="text-sm md:text-base lg:text-base font-semibold text-primary">
                                                $ {disCountedPrice?.toFixed(0)}
                                            </h2>
                                            {discount > 0 && (
                                                <>
                                                    <del
                                                        className="text-sm italic text-gray-500"
                                                        style={{ fontSize: "10px" }}
                                                    >
                                                        $ {price}
                                                    </del>
                                                </>
                                            )}
                                        </div>

                                        {/* cart  */}
                                        {/* {findPd ? (
                                            <>
                                                <div className="flex items-center justify-end">
                                                    <button className="hidden bg-violet-200 opacity-40 px-2 py-2 rounded-lg text-gray-500 transition duration-300  text-sm md:flex lg:flex items-center space-x-1">
                                                        <BsCartCheckFill className="text-lg" />
                                                        <span className="text-xs">Added</span>
                                                    </button>
                                                <button className="flex md:hidden lg:hidden border border-gray-200 rounded-full p-2 bg-gray-200 opacity-40 ring-violet-200">
                                                        <BsCartCheckFill className="text-lg text-gray-600" />
                                                    </button>
                                                </div>
                                            </>
                                        ) : ( */}
                                            <>
                                                <div className="flex items-center justify-end">
                                                    <button
                                                className="hidden bg-violet-600 hover:bg-violet-800  ring-violet-200 ring-offset-2 px-2 py-2 rounded-md text-white focus:ring-4 transition duration-300   text-xs md:text-sm lg:text-sm md:flex lg:flex items-center space-x-1"
                                                        onClick={handleCart}
                                                    >
                                                        {/* <BsCartCheckFill className="text-lg" /> */}
                                                        {changeCartBtn ? (
                                                            <span
                                                                className="text-xs"
                                                                onMouseEnter={() => setCartBtn(false)}
                                                                onMouseLeave={() => setCartBtn(true)}
                                                            >
                                                                Buy Now
                                                            </span>
                                                        ) : (
                                                            <span
                                                                className="text-xs"
                                                                onMouseEnter={() => setCartBtn(true)}
                                                                onMouseLeave={() => setCartBtn(true)}
                                                            >
                                                                Cart
                                                            </span>
                                                        )}
                                                    </button>

                                                    <button
                                                        className="flex md:hidden lg:hidden border border-gray-200 rounded-full p-2"
                                                        onClick={handleCart}
                                                    >
                                                        <AiOutlineShoppingCart className="text-lg text-gray-600" />
                                                    </button>
                                                </div>
                                            </>
                                        {/* )}  */}
                                    </div>
                                </div>
                            </>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
