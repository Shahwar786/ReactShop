import React from 'react'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
    return (
        <>
           
            <main className="bg-secondary h-full w-full ">
                <div className="max-w-screen-xl mx-auto px-6 flex flex-col py-24 lg:justify-center justify-start">
                    <div className="grid grid-cols-1  place-content-center">
                       

                        {/* login form  */}
                        <div className="flex flex-col items-center">
                            {/* brand  */}
                            <div className="flex flex-col items-center space-y-4">
                                <p className="text-center text-violet-600 text-2xl font-bold">Login</p>
                            </div>

                            {/* login form  */}
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Login
