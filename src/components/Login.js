import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { Background, NetflixLogo, UserImage } from "../utils/constants";

const App = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButoonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignIn ? name.current?.value : null
    );
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:  UserImage ,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute w-full z-10">
        <Header />
      </div>
      <div className="relative h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src={Background}
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

        <input
          ref={email}
          className="p-4 m-2 rounded-md w-full bg-gray-500 text-white"
          type="text"
          placeholder="Email"
        />
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 m-2 rounded-md w-full bg-gray-500 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
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
