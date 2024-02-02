import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  // for testing set the isAdmin to true so we can see the tools nav link
  // const [isAdmin] = useState(true) // this will need to be set if the user is identified as a musician after logging in
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(true); // set to true for testing purposes.  need to set to ()
  const { isAuthenticated } = useAuth0();
  const [nav, setNav] = useState(false);
  console.log("Location ", location);

  // Toggle hamburger menu items when user clicks the icon
  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed top-0 left-0 w-full h-100 bg-black flex items-center justify-between px-4">
      <div className="flex items-center">
        <img
          src="candieLogoBlack.png"
          alt="header-image"
          className="h-16 object-cover"
        />
      </div>
      <div className="fixed top-1 right-4">
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          // <span>
          //   <Link to="/profile">Profile</Link> || <LogoutButton />
          //   </span>
          <LoginButton />
        )}
      </div>
      <nav className="hidden md:flex items-center mt-7">
        {isAdmin && (
          <Link
            to="/tools"
            className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
              location.pathname === "/tools" ? "text-pink-600" : ""
            }`}
          >
            Tools
          </Link>
        )}
        <Link
          to="/"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/" ? "text-pink-600" : ""
          }`}
        >
          Request Song
        </Link>
        <Link
          to="/tip"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/tip" ? "text-pink-600" : ""
          }`}
        >
          Tip
        </Link>
        <Link
          to="/merch"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/merch" ? "text-pink-600" : ""
          }`}
        >
          Merch
        </Link>
        <Link
          to="/shows"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/shows" ? "text-pink-600" : ""
          }`}
        >
          Shows
        </Link>
        <Link
          to="/about"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/about" ? "text-pink-600" : ""
          }`}
        >
          About
        </Link>
      </nav>
      {/* Hamburger Icon for mobile devices  */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {nav ? (
          <FaTimes size={25} className="mt-9" />
        ) : (
          <RxHamburgerMenu size={25} className="mt-9" />
        )}
      </div>

      {/* Mobile Menu Items */}
      <ul
        className={` ${
          nav
            ? "opacity-100 transform translate-x-0"
            : "opactity-0 transform translate-y-full"
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/95 flex  flex-col justify-center items-center text-xl
          `}
        onClick={() => setNav(false)}
      >
        {isAdmin && (
          <Link
            to="/tools"
            className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
              location.pathname === "/tools" ? "text-pink-600" : ""
            }`}
          >
            <li className="p-2">Tools</li>
          </Link>
        )}
        <Link
          to="/"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/" ? "text-pink-600" : ""
          }`}
        >
          <li className="p-2">Request Song</li>
        </Link>
        <Link
          to="/tip"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/tip" ? "text-pink-600" : ""
          }`}
        >
          <li className="p-2">Tip</li>
        </Link>
        <Link
          to="/merch"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/merch" ? "text-pink-600" : ""
          }`}
        >
          <li className="p-2">Merch</li>
        </Link>
        <Link
          to="/shows"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/shows" ? "text-pink-600" : ""
          }`}
        >
          <li className="p-2">Shows</li>
        </Link>
        <Link
          to="/about"
          className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === "/about" ? "text-pink-600" : ""
          }`}
        >
          <li className="p-2">About</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
