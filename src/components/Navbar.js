import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const themes = [
    { id: "theme1", label: "#0A2647" },
    { id: "theme2", label: "#3E3232" },
    { id: "theme3", label: "#872341" },
    { id: "theme4", label: "#3B5249" },
    { id: "theme5", label: "#393E46" },
    { id: "theme6", label: "#FFFFFF" },
  ];
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.theme !== 5 ? "dark" : "light"
      } bg-${props.theme !== 5 ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
              {/* <Link className="nav-link active" to="/">
                Home
              </Link> */}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
          <div className="d-flex align-items-center">
            <span
              className={`navbar-text text-${
                props.theme !== 5 ? "light" : "dark"
              } me-3`}
            >
              Choose Theme:
            </span>
            {themes.map((themeOption) => (
              <div
                className={`rounded mx-2 color-pallete ${
                  props.backgrounds[props.theme] === themeOption.label
                    ? "active-theme"
                    : ""
                }`}
                key={themeOption.id}
                id={themeOption.id}
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: `${themeOption.label}`,
                }}
                onClick={props.toggleMode}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title: "Set Title Here",
//     aboutText: "About",
// }
