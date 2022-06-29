import React from 'react';
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='max-w-screen-xl mx-auto px-6 py-6 bg-white border-b-2 border-gray-200'>

            {/* container  */}
            <div className='flex flex-grow justify-between items-center'>
                {/* logo  */}
                <div>
                    <h1 className='text-violet-500 font-bold text-3xl'>Logo</h1>
                </div>

                {/* search bar  */}
                {/* <div>
                <input type="text" />
            </div> */}

                {/* login and signup button  */}
                <div className='flex justify-center space-x-3'>
                    {/* <Link to="/login"> */}

                        <button className='bg-violet-600 text-white py-2 px-4 rounded-md text-sm hover:bg-violet-700 transition '>Login</button>
                    {/* </Link> */}
                    {/* <Link to="/signup"> */}

                        <button className='bg-violet-600 text-white py-2 px-4 rounded-md text-sm hover:bg-violet-700 transition '>Signup</button>
                    {/* </Link> */}

                </div>
            </div>
        </nav>
    )
}

export default Navbar