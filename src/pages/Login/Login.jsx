import { useForm } from "react-hook-form";
import login from "../../assets/images/banner/login (2).png";
import banner from "../../assets/images/banner/banner-1.png";
import useAuth from "../../hooks/useAuth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loading, setLoading, signIn } = useAuth();
  const onSubmit = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login|Assignment</title>
      </Helmet>
      <div
        className=" min-h-screen max-w-[1300px] mx-auto "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center w-1/2 lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-xl   p-10">
            {/* form control  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-md text-black font-poppins font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className=" text-red-700 font-semibold ">
                    Email is required
                  </span>
                )}
              </div>
              {/* password  */}
              <div className="form-control relative">
                <label className="label ">
                  <span className="label-text text-black font-poppins font-semibold">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="input input-bordered"
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
                {errors.password && (
                  <span className=" text-red-700 font-semibold ">
                    Password is required
                  </span>
                )}
                <div className="flex justify-between items-center my-6">
               <div>
               <label className="label">
                  <button className="btn-link link font-poppins link-hover">
                    Forgot password?
                  </button>
                </label>
               </div>
                <button
                disabled={loading}
                className="text-lg font-semibold text-white font-poppins bg-[#F69B03] px-8 py-2 rounded-md text-center"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="text-center font-semibold text-xl animate-spin mx-auto" />
                ) : (
                  "Login"
                )}
              </button>
              </div>
              
                </div>
            </form>
            <div className=" text-center">
            <div className="divider divider-neutral text-md font-poppins font-semibold">Login with social accounts</div>
              <div>
                <SocialLogin />
              </div>
              <span className="text-sm font-poppins font-medium space-x-0">
                Don't have an account?
                <Link to="/register" className="btn btn-link">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
