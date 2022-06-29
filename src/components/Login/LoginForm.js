import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { signInUser, signInWithGoogle } = useAuth();
  const onSubmit = async (data) => {
    await signInUser(data.email, data.password);
  };



  return (
    <div className="my-6 bg-violet-600 p-4 py-8 w-2/5 box-border rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col space-y-4">


          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-white text-xs">
              Email
            </label>
            <input
              className="px-3 py-3 text-xs rounded-md w-full"
              type="email"
              name="input"
              id="email"
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
            />
          </div>



          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="white text-xs flex justify-between items-center"
            >
              <span className="text-white">Password</span>

            </label>
            <input
              type="password"
              name="input"
              id="password"
              className="px-3 py-3 text-xs rounded-md w-full" placeholder="********"
              {...register("password", { required: true })}
            />
          </div>


          {/* Login button  */}
          <div className="py-4">
            <button
              type="submit"
              className="py-3 px-4 w-full bg-white text-gray-700 rounded-md  transition duration-300"
            >
              Login
            </button>
            <p className="text-white text-xs text-center py-3">Or</p>
          </div>
        </div>
      </form>

      <div>
        {/* google button  */}
        <button
          type="submit"
          className="py-3 px-4 w-full text-white flex items-center justify-center text-xs space-x-3 rounded-md border"
          onClick={signInWithGoogle}
        >
          <FcGoogle className="text-2xl" />
          <span>Login with Google</span>
        </button>

        {/* register  */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-center text-white text-xs">
            Don't have any account ?
            <Link
              to="/signup"
              className="text-white text-xs font-bold underline cursor-pointer"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
