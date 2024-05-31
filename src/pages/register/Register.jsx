import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import banner from '../../assets/images/banner/banner-1.png'
import register from '../../assets/images/banner/register.png'

const Register = () => {
    const [showPassword ,setShowPassword]=useState(false)
    return (
        <div className=" flex flex-col md:flex lg:flex-row p-2 lg:space-x-10 mt-10  max-w-[1300px] mx-auto" style={{backgroundImage: `url(${banner})`}}>
        <Helmet>
        <title> Login - Case Study </title>
      </Helmet>
          <div className="w-1/2   hidden lg:block  bg-no-repeat  lg:w-1/2  rounded-l-lg "
  
          >
            <img  src={register} alt="" />
            
          </div>
          <div className="w-1/2  p-10 rounded-md ">
            <h1 className="text-3xl font-serif font-semibold text-black">
              Sign in to Case Study.
            </h1>
            <p>Enter your details below</p>
    
            <div className="flex mt-10 gap-4">
              
            </div>
            {/* <div className="divider font-serif">Or sign In with e-mail</div> */}
    
            <form >
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-xl font-serif font-semibold">
                    Email
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full relative">
                <div className="label">
                  <span className="label-text text-xl font-serif font-semibold">
                    Password
                  </span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full "
                  required
                />
                <span
                  className="absolute right-6 top-14"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl"></FaEyeSlash>
                  ) : (
                    <FaEye className="text-xl"></FaEye>
                  )}
                </span>
              </label>
              <button className="bg-[#33989B] px-3 py-2 rounded-lg text-xl font-serif text-white font-semibold mt-4">
                Sign In
              </button>
              
            </form>
            <div className="flex items-center pt-4 space-x-1 mt-4">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      
            <p className="text-center text-xl font-serif my-6">
              Dont’t Have An Account ?{" "}
              <Link className="btn-link" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
  
      
    );
};

export default Register;