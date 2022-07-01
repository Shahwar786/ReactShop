import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {auth, user, signOutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOutUser();
        navigate("/login");
    };

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
                {
                    auth.currentUser ? (
                        <>
                            <div className="flex items-center space-x-3 mr-3 lg:mr-0">
                                <div className='flex flex-col'>
                                    <h1 className='text-base font-bold text-gray-700'>{user.displayName}</h1>
                                    <span className='text-xs text-gray-500'>{user?.email}</span>
                                </div>
                                {/* <img
                                    className="w-10 h-10 rounded-full object-cover"
                                    alt={user.displayName}
                                    src={user.image}
                                /> */}
                            {/* menus  */}
                                <FiLogOut  className="cursor-pointer" onClick={handleLogout}/>
                            </div>
                        </>
                    ):(
                        <>
                                <div className='flex justify-center space-x-3'>
                                    <Link to="/login">

                                        <button className='bg-violet-600 text-white py-2 px-4 rounded-md text-sm hover:bg-violet-700 transition '>Login</button>
                                    </Link>
                                    <Link to="/signup">

                                        <button className='bg-violet-600 text-white py-2 px-4 rounded-md text-sm hover:bg-violet-700 transition '>Signup</button>
                                    </Link>

                                </div>
                        </>
                    )
                }
                
            </div>
        </nav>
    )
}

export default Navbar