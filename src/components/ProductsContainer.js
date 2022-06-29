import React, { useState } from 'react';
import { AiFillCamera, AiOutlineMobile } from 'react-icons/ai';
import { BiHeadphone } from 'react-icons/bi';
import { BsLaptop } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';
// import CategoriesBar from './CategoriesBar'
import Products from './Products/Products';

const categoires = [
    { id: 1, title: "All", icon: <TiThSmall className='text-violet-600 text-xl'/> },
    { id: 2, title: "Phone", icon: <AiOutlineMobile className='text-violet-600 text-xl'/> },
    { id: 3, title: "Laptop", icon: <BsLaptop className='text-violet-600 text-xl'/> },
    { id: 4, title: "Camera", icon: <AiFillCamera className='text-violet-600 text-xl'/> },
    { id: 5, title: "Headphone", icon: <BiHeadphone className='text-violet-600 text-xl'/> },
]

const ProductsContainer = () => {
    const [text,setText] = useState('All')
   
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
                                <div className={`flex items-center space-x-3 border border-violet-300  py-3 px-6 justify-center rounded cursor-pointer w-full `}
                                    onClick={() => { 
                                        setText(item?.title) 
                                    }}
                                >
                                    {item?.icon}
                                    <span className='text-sm text-violet-600'>{item?.title}</span>
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