const {
    VITE_BASE_URL,
    VITE_AUTH0_DOMAIN,
    VITE_AUTH0_CLIENT_ID,
    VITE_AUTH0_CALLBACK_URL,
  } = import.meta.env;
  
  export default {
    BASE_URL: VITE_BASE_URL,
    AUTH0_DOMAIN: VITE_AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: VITE_AUTH0_CLIENT_ID,
    AUTH0_CALLBACK: VITE_AUTH0_CALLBACK_URL,
  };