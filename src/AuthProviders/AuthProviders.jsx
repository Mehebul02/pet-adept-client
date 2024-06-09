import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";
import useAxiosCommon from "../hooks/useAxiosCommon";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosCommon = useAxiosCommon()
  //   user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   sign in google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   sign in google
  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //   logout
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };
  //   user update
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // save user 
  const saveUser = async(user)=>{
    const currentUser ={
      email:user.email,
      name:user.displayName,
      image:user.photoURL,
      role:'user',
      time:Date.now()

    }
    const {data} = await axiosCommon.post('/users',currentUser)
    return data
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user", currentUser);
      setUser(currentUser);
      if(currentUser){
        
        const userInfo ={email:currentUser.email}
        // get to token client 
        axiosCommon.post(`/jwt`,userInfo)
        .then(res =>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
            setLoading(false);
          }
        })
        
      }
      else{
        // TODO:remove token 
        localStorage.removeItem('access-token')
        setLoading(false);
      }
      saveUser(currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Auth info
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInGoogle,
    signInGithub,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProviders.propTypes = {
  // Array of children.
  children: PropTypes.array,
};

export default AuthProviders;