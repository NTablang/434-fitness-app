import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// get the user from the local storage every time the path changes
// if the user is not logged in, redirect to the login page (unprotected routes)
// if the user is logged in, redirect to the home page (protected routes)
function AuthProvider({ AuthChildren, UnAuthChildren }) {
  const url = useLocation();
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, [url]);

  return <>{user ? <AuthChildren /> : <UnAuthChildren />}</>;
}

export default AuthProvider;
