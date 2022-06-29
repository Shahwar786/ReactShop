import React from 'react';
import SignUpForm from '../components/Sign Up/SignUpForm';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

const SignUp = () => {
    return (
        <>
           
            <main className="bg-secondary h-full  w-full">
                <div className="max-w-screen-xl mx-auto px-6 flex flex-col py-24 lg:justify-center justify-start">
                    <div className="grid grid-cols-1  place-content-center">


                        {/* login form  */}
                        <div className="flex flex-col items-center">
                            {/* brand  */}
                            <div className="flex flex-col items-center space-y-4">
                                <p className="text-center text-violet-600 text-2xl font-bold">Sign Up</p>
                            </div>

                            {/* login form  */}
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default SignUp
