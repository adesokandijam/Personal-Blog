import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import "../../styles/Navbar.css";
import { useAuthenticator } from '@aws-amplify/ui-react';
import awsExport from '../../aws-exports'
import ReorderIcon from "@material-ui/icons/Reorder";
import Amplify from 'aws-amplify'

Amplify.configure(awsExport)
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  var link;
  var logout;

  if (route === 'authenticated') {
    link = <Link to="/write"> Write </Link>
    logout = <Link to={"/"} onClick={() => logOut()}>Logout</Link>

  }

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/blog"> Blog </Link>
        <Link to="/contact"> Contact </Link>
        {link}
        {logout}
      </div>
    </div>
  );
}

export default Navbar;
