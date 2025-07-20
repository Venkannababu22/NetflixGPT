import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

import Header from "./Header";
const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButoonClick = () => {
    // validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrMessage(message);

    // Sign In / Sign up
  };

  return (
    <div>
      <div className="absolute w-full z-10">
        <Header />
      </div>
      <div className="relative h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg"
          alt="Background"
        />
      </div>
      <form
        id="form"
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-20 w-3/12 bg-black/80 text-white rounded-xl p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 m-2 rounded-md w-full bg-gray-500 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 m-2 rounded-md w-full bg-gray-500 text-white"
          type="text"
          placeholder="Email"
        />

        <input
          ref={password}
          className="p-4 m-2 rounded-md w-full bg-gray-500 text-white"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 px-4">{errMessage}</p>
        <button
          className="bg-red-600 text-white font-bold rounded-md p-4 my-6 hover:bg-red-500 m-2 w-full"
          onClick={handleButoonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-1 cursor-pointer" onClick={toggelSignInForm}>
          {isSignIn
            ? "New to Netfilx? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default App;
