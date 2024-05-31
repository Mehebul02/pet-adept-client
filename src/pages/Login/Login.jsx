import { useForm } from "react-hook-form";
import login from  '../../assets/images/banner/login (2).png'
import banner from "../../assets/images/banner/banner-1.png";
import useAuth from "../../hooks/useAuth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loading,signIn } = useAuth();
  const onSubmit = (data) => {
    signIn(data.email,data.password)
    .then(result=>{
        const loggedUser=result.user
        console.log(loggedUser);
    })
    .catch(err=>{
        console.log(err);
    })
  };
  return (
    <div>
      <Helmet>
        <title>Login|Assignment</title>
      </Helmet>
      <div className=" min-h-screen max-w-[1300px] mx-auto " style={{backgroundImage: `url(${banner})`}}>
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
                  <span className="label-text text-md text-black font-poppins font-semibold">Email Address</span>
                </label>
                <input
                  {...register("name")}
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* password  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-poppins font-semibold">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <button className="btn-link link font-poppins link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>

              <div className="flex justify-between items-center text-center">
                <span className="text-sm font-poppins font-medium space-x-0">
                Don't have an account?<Link to='/register'className="btn btn-link">Register</Link>
                </span>
                <button className="text-lg font-semibold text-white font-poppins bg-orange-600 px-8 py-2 rounded-md text-center">
                  {loading ? (
                    <AiOutlineLoading3Quarters className="text-center font-semibold text-xl animate-spin mx-auto" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
