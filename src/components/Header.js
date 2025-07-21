import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-transparent w-full flex items-center justify-between">
      <div>
        <img
          className="w-40 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      {user && <div className="flex">
        <img className="w=8 h-8 m-2" alt="userIcon" src={user?.photoURL} />
        <button
          onClick={handleSignOut}
          className="text-white font-bold cursor-pointer"
        >
          Sign out
        </button>
      </div>}
    </div>
  );
};

export default Header;
