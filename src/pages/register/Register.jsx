import { Helmet } from "react-helmet-async";
import RegisterForm from "./RegisterForm";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { imageUpload } from "../../utility/index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Register = () => {
  const { user, createUser,updateUserProfile, loading,setLoading,logOut } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload image");
  const [error,setError] = useState()
  const navigate = useNavigate()
  const axiosCommon =useAxiosCommon()
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    if (password.length < 6) {
        return setError('Password should be at least 6 characters')
      }
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
        return setError("First Characters uppercase and Lowercase will be ");
      }
    console.log(name, email, password);
    try {
        setLoading(true)
        // image upload 
      const image_url = await imageUpload(image);
    //   user register
    const result = await createUser(email,password)
    console.log(result);
    await updateUserProfile(name,image_url)
    const userInfo ={
      name :name,
      email:email,
      image:image_url

    }
   axiosCommon.post('/users',userInfo)
  .then(res=>{
    console.log(res.data);
  })
    navigate("/");
      toast.success("Registration successfully");
      

    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };
  return (
    <div>
      <Helmet>
        <title> Login - Case Study </title>
      </Helmet>
      <RegisterForm
        handleRegister={handleRegister}
        error={error}
        handleImage={handleImage}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        imageText={imageText}
        loading={loading}
        

      />
    </div>
  );
};

export default Register;
