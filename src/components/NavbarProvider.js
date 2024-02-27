import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../util/constants";

function NavbarProvider({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="navbar-cont">
          {ROUTES.map((route, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(route.path);
              }}
              className="navbar-cont-btn"
            >
              {route.name}
            </div>
          ))}
        </div>
      </div>
      <div className="main-page">
        <div className="full-size">{children}</div>
      </div>
    </div>
  );
}

export default NavbarProvider;
