import React from "react";
import "./Login.css";
import img from "./images/640px-Davlat_xavfsizlik_xizmati_emblemasi.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // Check if the username and password match your criteria (e.g., "admin" for both)
    if (username === "admin" && password === "admin") {
      // Redirect to the home page when credentials match
      navigate("/iqbol");
    } else {
      // Handle invalid login
      alert("login yoki parol xato!");
    }
  };
  return (
    <div>
      <div
        className="container center-container"
        style={{ transform: "scale(0.80)" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="login-container">
              <div className="login-header">
                <img
                  src={img}
                  alt="Logo"
                  className="img-fluid mb-4"
                  style={{ maxWidth: "200px" }}
                />
                <h2>Davlat xavfsizlik xizmati</h2>
                <p>O'quv markaz dasturiga xush kelibsiz!</p>
              </div>
              <form className="login-form">
                <div className="form-group">
                  <label for="username">Login</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Loginni kiriting"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="password">Parol</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Parolni kiriting"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-login mx-auto"
                    onClick={handleLogin}
                  >
                    Tizimga kirish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
