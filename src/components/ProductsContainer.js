import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiFoodTag } from 'react-icons/bi';
import { GiFruitBowl, GiSlicedBread } from "react-icons/gi";
import { MdEmojiFoodBeverage, MdFastfood } from "react-icons/md";
import { TiThSmall } from 'react-icons/ti';
// import CategoriesBar from './CategoriesBar'
import Products from './Products/Products';


const ProductsContainer = () => {
    const [text,setText] = useState('All')
    const [productsData, getProductsData] = useState([])

    let allPd = productsData?.filter((item) => item)
    let fruitsPd = productsData?.filter((item) => item?.category?.toLowerCase() === "fruits")
    let vegetabledPd = productsData?.filter((item) => item?.category?.toLowerCase() === "vegetables")
    let dairyPd = productsData?.filter((item) => item?.category?.toLowerCase() === "dairy")
    let snacksPd = productsData?.filter((item) => item?.category?.toLowerCase() === "snacks")
    let breadPd = productsData?.filter((item) => item?.category?.toLowerCase() === "bread")

    useEffect(() => {
        axios.get('https://reactoapi.herokuapp.com/products').then(res => getProductsData(res.data))
    }, [])

    const categoires = [
        { id: 1, title: "All", icon: <TiThSmall className='text-violet-600 text-xl' />,totalProduct: `${allPd?.length}` },
        { id: 2, title: "Vegetables", icon: <BiFoodTag className='text-violet-600 text-xl' />, totalProduct: `${vegetabledPd?.length}` },
        { id: 3, title: "Fruits", icon: <GiFruitBowl className='text-violet-600 text-xl' />, totalProduct: `${fruitsPd?.length}` },
        { id: 4, title: "Dairy", icon: <MdEmojiFoodBeverage className='text-violet-600 text-xl' />, totalProduct: `${dairyPd?.length}` },
        { id: 5, title: "Snacks", icon: <MdFastfood className='text-violet-600 text-xl' />, totalProduct: `${snacksPd?.length}` },
        { id: 6, title: "Bread", icon: <GiSlicedBread className='text-violet-600 text-xl' />, totalProduct: `${breadPd?.length}` },
    ]


    return (
        <section className=' relative -top-16 lg:-top-48 max-w-screen-xl mx-auto px-6'>
            <div className='bg-white  rounded-lg shadow-xl px-4 py-5'>
                <h1 className='text-gray-700 text-center font-semibold py-4'>Categories</h1>

                {/* categories header  */}
                <div>
                    {/* <CategoriesBar /> */}
                    <div className='flex flex-col lg:flex-row items-center lg:space-x-4 '>
                        {categoires?.map((item) => {

                           

                            return (
                                <div className={`flex items-center space-x-3 border border-violet-300  py-6 px-4 justify-center rounded cursor-pointer w-full `}
                                    onClick={() => { 
                                        setText(item?.title) 
                                    }}
                                >
                                    {item?.icon}
                                    <span className='text-sm text-violet-600'>{item?.title} ({item?.totalProduct})</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                {/* all products  */}
                <div className='my-6'>     
                    <Products categoryText={text} />
                </div>
            </div>


        </section>
    )
}

export default ProductsContainer