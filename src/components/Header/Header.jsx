import { Link, useLocation } from "react-router-dom"
import { useState } from 'react';
import './Header.css'

function Header() {
    // for testing set the isAdmin to true so we can see the tools nav link
    const [isAdmin] = useState(true) 
    const location = useLocation()

return (
    
    <header className="fixed top-0 left-0 w-full h-100 bg-black flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src="candieLogoBlack.png" alt="header-image" className="h-16 object-cover" />
        <Link to="/">
          <h1 className="text-stone-700 text-md font-bold ml-6">Candied Tunes</h1>
        </Link>
      </div>
      <div className="fixed top-1 right-4">
        <button className="bg-white text-xs px-1 py-1 text-purple-600 rounded-full hover:bg-pink-600 hover:text-white">Musician Login</button>
      </div>
      <nav className="flex items-center mt-7">
        {isAdmin && <Link to="/tools"  className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === '/tools' ? 'text-pink-600' : ''
          }`}>Tools</Link>}
        <Link to="/" className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === '/' ? 'text-pink-600' : ''
          }`}>Request Song</Link>
        <Link to="/tip" className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === '/tip' ? 'text-pink-600' : ''
          }`}>Tip</Link>
        <Link to="/merch" className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === '/merch' ? 'text-pink-600' : ''
          }`}>Merch</Link>
        <Link to="/shows" className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === '/shows' ? 'text-pink-600' : ''
          }`}>Shows</Link>
        <Link to="/about" className={`text-purple-600 ml-4 hover:text-pink-600 hover:underline ${
            location.pathname === '/about' ? 'text-pink-600' : ''
          }`}>About</Link>
      </nav>
    </header>

  );

}
  
  export default Header;