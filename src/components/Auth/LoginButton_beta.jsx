import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  console.log('loginButton -')
  
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [isAdminUser, setIsAdminUserLocal] = useState(false);

  const handleLogin = async () => {
    console.log('handleLogin -')
    await loginWithRedirect({
      appState: {
        returnTo: "/",  // navigates back to the landing page after login
      },
    });
  };

  const checkIfAdmin = (email) => {
    console.log('checkIfAdmin -')
    // compare the email to a list of admin emails
    const adminEmails = ["stevediggs70@gmail.com", "candie.tremblay@gmail.com"];
    return adminEmails.includes(email);
  };

  useEffect(() => {
    console.log('useEffect -')
    const handleEffect = async () => {
      console.log('handleEffect')
      // If user is not available yet, wait for it
      if (!user) {
        return;
      }

      // After login, check if the user is an admin based on their email
      if (user.email) {
        console.log("User logged in with email:", user.email);

        const isAdminUser = checkIfAdmin(user.email);

        if (!isAdminUser) {
          // Log out the user if they are not an admin
          await logout({
            returnTo: window.location.origin,
          });
        } else {
          // Set isAdminUser to true if the user is an admin
          setIsAdminUserLocal(true);
          setIsAdminUser(true);
        }
      }
    };

    handleEffect();
    console.log('handleEffect -')
  }, [user, setIsAdminUser, logout]);

  return (
    <button className="fixed top-1 right-4 rounded-full px-1 py-1 bg-neutral-200 text-xs text-purple-600" onClick={handleLogin}>
      Musician Log In
    </button>
  );
};

export default LoginButton;