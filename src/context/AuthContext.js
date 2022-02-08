import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider ({ children }) {
  const navigate = useNavigate();
  const [ isAuth, setIsAuth ] = useState(false);
  
  const isAuthenticated = () => {
    const Customer = clayful.Customer;
    const options = {
      customer: localStorage.getItem("accessToken"),
    };

    Customer.isAuthenticated(options, (err, result) => {
      if (err) {
        console.log(err.code);
        setIsAuth(false);
        return;
      }
      
      const data = result.data;
      const state = (data.authenticated) ? true : false;
      setIsAuth(state);

      console.log(data);
    });
  }

  const signOut = () => {
    setIsAuth(false);
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  const AuthContextData = {
    isAuth,
    isAuthenticated,
    signOut,
  };

  return (
    <AuthContext.Provider value={AuthContextData}>
      { children }
    </AuthContext.Provider>
  );
}