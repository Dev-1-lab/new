import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
function CustomNavbar() {
  const [osintDropdownOpen, setOsintDropdownOpen] = useState(false);
  const [cryptographyDropdownOpen, setCryptographyDropdownOpen] =
    useState(false);
  const [socialengineeringDropdownOpen, setSocialengineeringDropdownOpen] =
    useState(false);
  const [quizStarted, setQuizStarted] = useState(false); // New state variable

  const startQuiz = () => {
    const confirmed = window.confirm(
      "Are you sure you want to start the quiz?"
    );
    if (confirmed) {
      setQuizStarted(true);
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top  "
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000" /* Make sure it's above other content */,
        backgroundColor: "white" /* Add your background color */,
      }}
    >
      <Link className="navbar-brand mx-4" to="/" style={{ fontSize: "25px" }}>
        Cyberspace
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/" style={{ fontSize: "15px" }}>
              Home
            </Link>
          </li>
          <li
            className={`nav-item mx-2 dropdown ${
              osintDropdownOpen ? "show" : ""
            }`}
            onMouseEnter={() => setOsintDropdownOpen(true)}
            onMouseLeave={() => setOsintDropdownOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#osint"
              id="osintDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "15px" }}
            >
              OSINT
            </a>
            <ul
              className={`dropdown-menu ${osintDropdownOpen ? "show" : ""}`}
              aria-labelledby="osintDropdown"
            >
              <li>
                <Link className="dropdown-item" to="/location">
                  findlocation
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#osint-subsection-2">
                  Subsection 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#osint-subsection-2">
                  Subsection 2
                </a>
              </li>
            </ul>
          </li>

          <li
            className={`nav-item mx-2 dropdown ${
              cryptographyDropdownOpen ? "show" : ""
            }`}
            onMouseEnter={() => setCryptographyDropdownOpen(true)}
            onMouseLeave={() => setCryptographyDropdownOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#cryptography"
              id="cryptographyDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "15px" }}
            >
              Cryptography
            </a>
            <ul
              className={`dropdown-menu ${
                cryptographyDropdownOpen ? "show" : ""
              }`}
              aria-labelledby="cryptographyDropdown"
            >
              <li>
                <Link className="dropdown-item" to="/rsa-calc">
                  RSA calculator
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/caesar-cipher">
                  Ceaser calculator
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/vigenere-calc">
                  Vigenere Calc
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item mx-2 dropdown ${
              osintDropdownOpen ? "show" : ""
            }`}
            onMouseEnter={() => setSocialengineeringDropdownOpen(true)}
            onMouseLeave={() => setSocialengineeringDropdownOpen(false)}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#socialengineering"
              id="socialengineerDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "15px" }}
            >
              Social Engineering
            </a>
            <ul
              className={`dropdown-menu ${
                socialengineeringDropdownOpen ? "show" : ""
              }`}
              aria-labelledby="cryptographyDropdown"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="#socialengineering-subsection-1"
                >
                  phishing website
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#socialengineering-subsection-2"
                >
                  Subsection 2
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#socialengineering-subsection-2"
                >
                  Subsection 2
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item mx-2">
            {quizStarted ? (
              <Link
                className="nav-link"
                to="/quiz"
                style={{ fontSize: "15px" }}
              >
                Test
              </Link>
            ) : (
              <button
                className="nav-link btn"
                onClick={startQuiz}
                style={{ fontSize: "15px" }}
              >
                Start Test
              </button>
            )}
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/about" style={{ fontSize: "15px" }}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-nav mx-4 ">
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#user"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ marginRight: "auto" }}
          >
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"
              alt="User Avatar"
              className="rounded-circle"
              width="32"
              height="32"
            />
          </a>
          <div
            className="dropdown-menu "
            aria-labelledby="navbarDropdown"
            style={{ left: "auto", right: 0 }}
          >
            <a className="dropdown-item" href="#profile">
              Profile
            </a>
            <div className="dropdown-divider"></div>

            <Link className="dropdown-item" to="/login">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
