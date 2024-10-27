import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">About Us</h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p className="lead" style={{ textAlign: "justify" }}>
            Welcome to <strong>Cyberspace</strong>! We are dedicated to
            providing high-quality cybersecurity education and resources to help
            you protect your digital world. Our mission is to empower
            individuals with the knowledge and skills needed to stay safe
            online. Whether you're a beginner or an expert, Cyberspace is your
            go-to source for cybersecurity insights, tutorials, and quizzes.
            Explore our website to learn about various cybersecurity topics,
            discover the latest trends, and test your knowledge through our
            interactive quizzes. Thank you for choosing Cyberspace as your
            cybersecurity learning platform. Stay safe and secure in the digital
            realm!
          </p>
          <img
            src="https://warontherocks.com/wp-content/uploads/2019/09/ROVNER-1-1-1024x678.jpg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
