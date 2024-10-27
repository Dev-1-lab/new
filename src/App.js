import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import CaesarCipherPage from "./CaesarCipherPage";
import Quiz from "./Quiz";
import Location from "./Location";
import GridMenu from "./GridMenu";
import About from "./About";
import RSACalculator from "./RSACalculator";
import Login from "./Login";
import VigenereCipher from "./VigenereCipher";

// Create a layout component that includes the navbar and footer
function Layout({ children }) {
  return (
    <div>
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/new"
          element={
            <Layout>
              <GridMenu />
            </Layout>
          }
        />
        <Route
          path="/quiz"
          element={
            <Layout>
              <Quiz />
            </Layout>
          }
        />
        <Route
          path="/location"
          element={
            <Layout>
              <Location />
            </Layout>
          }
        />
        <Route
          path="/caesar-cipher"
          element={
            <Layout>
              <CaesarCipherPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/vigenere-calc"
          element={
            <Layout>
              <VigenereCipher />
            </Layout>
          }
        />

        <Route
          path="/rsa-calc"
          element={
            <Layout>
              <RSACalculator />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
