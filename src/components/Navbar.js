import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav
                className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
            >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        {props.title}
                    </Link>
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
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">
                                    {props.aboutLinkText}
                                </Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input
                                onClick={props.toggleMode}
                                className="form-check-input"
                                type="checkbox"
                                id="toggleDarkMode"
                            />
                            <label
                                style={{
                                    color:
                                        props.mode === "light"
                                            ? "#212529"
                                            : "white",
                                }}
                                className="form-check-label"
                                htmlFor="toggleDarkMode"
                            >
                                Toggle Dark Mode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

// props type check
Navbar.propTypes = {
    title: PropTypes.string,
    toggleMode: PropTypes.func,
};

// props default values
Navbar.defaultProps = {
    title: "Set title here",
    aboutLinkText: "Default About",
};
