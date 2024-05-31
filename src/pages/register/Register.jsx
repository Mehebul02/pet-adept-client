import { Helmet } from "react-helmet-async";
import RegisterForm from "./RegisterForm";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";


const Register = () => {
    const { user,loading } = useAuth();
    const [imagePreview ,setImagePreview] =useState()
    const [imageText ,setImageText] =useState('Upload image')
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value 
    const email =form.email.value
    const password =form.password.value
    const image = form.image.files[0];
    const userInfo={
        name,
        email,
        password,
    }
    console.log(userInfo);
  };
  const handleImage =image =>{
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }
  return (
    <div>
         <Helmet>
          <title> Login - Case Study </title>
        </Helmet>
<RegisterForm 
handleRegister={handleRegister}
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
