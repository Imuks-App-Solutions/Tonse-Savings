import { useContext, useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import AuthContext from "../shared/authContext";
import { LoadingContext } from "../shared/authContext";

export default function SignUp() {
  const [loading, setLoading] = useContext(LoadingContext);
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const { register } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const checkUser = async () => {
      if (await user) {
        navigate("/Dashboard");
      } else {
        setLoading(false);
      }
    };
    checkUser();
  }, [user, navigate, setLoading]);

  async function handleRegister() {
    await register(email, password);
  }

  return (
    <div className="flex items-center w-full h-screen justify-center px-3">
      <div className="flex flex-col shadow-xl gap-2 md:gap-3 p-4 rounded-md">
        <h1 className="text-3xl text-left font-bold text-gray-900">
          Create account
        </h1>

        <p className="text-lg text-left font-semibold text-gray-500">
          Start your 30-day free trial. Cancel anytime.
        </p>

        {/* Google Button */}
        <button className="flex justify-center font-bold items-center gap-2 border-2 rounded-md py-2 border-gray-400">
          <img src={google} className=" object-cover h-8" />
          <h1>Sign Up with Google</h1>
        </button>

        {/* Apple Button */}
        <button className="flex justify-center font-bold items-center gap-2 border-2 rounded-md py-2 border-gray-400">
          <img src={apple} className=" object-cover h-8" />
          <h1>Sign Up with Apple ID</h1>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full py-1">
          <div className="bg-gray-400 h-[2px] w-full flex"></div>
          <p className="px-2 font-bold text-gray-500">OR</p>
          <div className="bg-gray-400 h-[2px] w-full flex"></div>
        </div>

        <form onSubmit={handleRegister}>
          {/* Email Input */}
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              Email*
            </p>
            <input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              Password*
            </p>
            <input
              placeholder="Create a password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              // eslint-disable-next-line react/no-unknown-property
              securetextentry={true}
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>
          {/* Error(validation) */}
          <div>Must be at least 8 characters</div>

          {/*Create Account Button */}
          <button
            className="flex justify-center font-semibold items-center gap-2 border-2 rounded-md text-white py-2 bg-gray-900"
            onClick={handleRegister}
          >
            <h1>Create account</h1>
          </button>
        </form>

        <div className="flex justify-center w-full">
          <p className="text-gray-900 font-semibold">
            Already have an account?
          </p>
          <a className="underline pl-1 font-bold" href="/Dashboard">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

// const SignUp = () => {

//   return (

//   );
// };

// export default SignUp;
