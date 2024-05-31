
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { signInWiteGoogle } = useAuth();
  const navigate = useNavigate();
//   const axiosCommon = useAxiosCommon();
  const handleGoogleLogin = () => {
    signInWiteGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosCommon.post(`/users`, userInfo).then((res) => {
          console.log(res.data);
          toast.success("Login successfully");
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div>
        <div
          onClick={handleGoogleLogin}
          className="flex justify-center items-center gap-2 bg-[#096FCA] w-56 mx-auto p-3 rounded-md"
        >
          <FcGoogle className="text-xl bg-white  rounded-md " />
          <button className=" text-white font-medium">
           
            Sign in with Google
          </button>
        </div>
      </div>
  
    );
};

export default SocialLogin;