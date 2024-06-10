
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { SiGithub } from 'react-icons/si';
// import toast from 'react-hot-toast';
// import useAxiosCommon from '../../hooks/useAxiosCommon';

const SocialLogin = () => {
    const { signInGoogle,signInGithub } = useAuth();
const navigate = useNavigate()

// handle google 
    const handleGoogleLogin=()=>{
      signInGoogle()
      .then(result=>{
        console.log(result.user);
        navigate('/')
      })
      .catch(err=>{
        console.log(err);
      })
    }
    // handle github 
    const handleGithub=()=>{
      signInGithub()
      .then(result=>{
        console.log(result.user);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  // const navigate = useNavigate();
  // const axiosCommon = useAxiosCommon();
  // const handleGoogleLogin = () => {
  //   signInGoogle()
  //     .then((result) => {
  //       console.log(result.user);
  //       navigate("/");
  //       const userInfo = {
  //         email: result.user?.email,
  //         name: result.user?.displayName,
  //         image:result.user?.photoURL
  //       };
  //       axiosCommon.post(`/users`, userInfo).then((res) => {
  //         console.log(res.data);
  //         toast.success("Login successfully");
  //         navigate("/");
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
    return (
        <div>
        <div
         
          className="flex justify-center items-center gap-6  w-56 mx-auto p-3 rounded-md"
        >
        <button  onClick={handleGoogleLogin}>  <FcGoogle className="text-3xl bg-white  rounded-md " /></button>
         <button onClick={handleGithub}> <SiGithub  className="text-3xl bg-white  rounded-md "/></button>
        </div>
      </div>
  
    );
};

export default SocialLogin;