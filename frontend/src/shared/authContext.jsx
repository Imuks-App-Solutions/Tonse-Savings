import axios from "axios";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const LoadingContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const register = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://eu-central-1.aws.data.mongodb-api.com/app/application-0-uwodi/endpoint/create_user",
        payload
      )
      .then((res) => {
        alert("user");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ register }}>
      <LoadingContext.Provider value={[loading, setLoading]}>
        {children}
      </LoadingContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContext;
