import { Link } from "react-router-dom"
import { useState } from 'react';
import './Header.css'

function Header() {
    // for testing set the isAdmin to true so we can see the tools nav link
    const [isAdmin] = useState(true) 

return (
    
    <header className="fixed top-0 left-0 w-full h-16 bg-black flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src="candieLogoBlack.png" alt="header-image" className="h-16 object-cover" />
        <Link to="/">
          <h1 className="text-stone-700 text-md font-bold ml-6">Candied Tunes</h1>
        </Link>
      </div>
      <nav className="flex items-center mt-7">
        {isAdmin && <Link to="/tools" className="text-purple-600 ml-4 hover:text-pink-600 hover:underline">Tools</Link>}
        <Link to="/request" className="text-purple-600 ml-4 hover:text-pink-600 hover:underline">Request Song</Link>
        <Link to="/tip" className="text-purple-600 ml-4 hover:text-pink-600 hover:underline">Tip</Link>
        <Link to="/merch" className="text-purple-600 ml-4 hover:text-pink-600 hover:underline">Merch</Link>
        <Link to="/shows" className="text-purple-600 ml-4 hover:text-pink-600 hover:underline">Shows</Link>
        <Link to="/about" className="text-purple-600 ml-4 hover:text-pink-600 hover:underline">About</Link>
      </nav>
    </header>

  );

}
  
  export default Header;