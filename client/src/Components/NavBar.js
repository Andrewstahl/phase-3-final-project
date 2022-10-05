import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  // display: "stretch",
  // alignContent: "center",
  width: "100%",
  height: "10%",
  padding: ".5em",
  fontSize: "15px",
  textDecoration: "none",
  color: "#171785",
  fontWeight: "bold",
  textAlign: "center",
  alignItems: "center"
};

const linkStylesActive = {
  ...linkStyles,
  background: "white"
}

const navLinkStyles = {
  display: "flex",
  borderTop: "1px solid grey",
  borderBottom: "1px solid grey"
}

export default function NavBar() {
  return (
    <div style={{ margin: "0 200px" }}>
      <div style={{ ...navLinkStyles }}>
        <NavLink 
          to="/"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Home
        </NavLink>
        <NavLink 
          to="/books"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Books
        </NavLink>
        <NavLink 
          to="/reviews"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Reviews
        </NavLink>
        <NavLink 
          to="/authors"
          exact
          style={({ isActive }) => (
            isActive ? linkStylesActive : linkStyles 
          )}
        >
          Authors
        </NavLink>
      </div>
    </div>
  )
}