import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",  // navigates back to the landing page after login
      },
    });
  };

  return <button className="mt-20 rounded-full bg-purple-900 text-white" onClick={handleLogin}>Musician Log In</button>; //how do we map this to our current login button?
};

export default LoginButton;