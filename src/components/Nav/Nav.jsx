import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { Link} from 'react-router-dom'


const Nav = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    return (
      <nav className="Nav">
        {/* The default UI (brand logo and app name)*/}
  
        <div>
          {/* A nested ternary can conditionally render multiple states */}
          {!isLoading ? (
            // if the loading variable is true - the ! will convert it to false and 'null' will be returned
            // if the loading variable is false - the ! will convert it to true and the next ternary will evaluate
            // if the user is authenticated (isAuthenticated === true), then a profile link and logout button are visible, otherwise, it will display the login button
  
            isAuthenticated ? (
              <span>
                <Link to="/profile">Profile</Link> || <LogoutButton />
              </span>
            ) : (
              <LoginButton />
            )
          ) : null}
        </div>
      </nav>
    );
  };

export default Nav