import { Link } from "react-router-dom"
import './Header.css'

function Header() {

return (
    
        <header className="relative" id="header-banner">
            <img src='Header_Banner1.png' alt="header-image" className="w-full h-40 object-cover" />
            <div className="absolute inset-y-0 left-0 flex flex-col items-start justify-center text-white text-shadow-lg pl-8">
                <Link to="/">
                    <h1 className="text-4xl font-bold mt-5 text-zinc-400 animate-zoom-in-once">
                   Candied Tunes
                    </h1>
                </Link>
                
                <nav className="flex items-start mt-14 text-purple-600">
                    {isAdmin && <Link to="/" className="text-lg ml-2">Tools</Link>}
                    <Link to="/" className="text-lg mr-2">Request Song</Link>
                    <Link to="/" className="text-lg ml-2">Tip</Link>
                    <Link to="/" className="text-lg ml-2">Merch</Link>
                    <Link to="/" className="text-lg ml-2">Shows</Link>
                    <Link to="/" className="text-lg ml-2">About</Link>
                </nav>
            </div>
        </header>

  );

}
  
  export default Header;