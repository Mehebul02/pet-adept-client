import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

const useAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default useAuth;