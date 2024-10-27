import React, { useState, useEffect } from "react";
import "./Quiz.css"; // Import your custom CSS for styling
import { Link } from "react-router-dom";
function Quiz() {
  const [questions, setQuestions] = useState([
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["Madrid", "Berlin", "Paris", "London"],
      answer: "Paris",
    },
    {
      question: "What is the capital of The UK?",
      options: ["Madrid", "Berlin", "Paris", "London"],
      answer: "London",
    },
    {
      question: "What is the capital of Uzbekistan?",
      options: ["Madrid", "Dushanbe", "Tashkent", "London"],
      answer: "Tashkent",
    },
    {
      question:
        "True or false: Rivest-Shamir-Adleman, or RSA, is an algorithm used for symmetric key cryptography.",
      options: ["True", "False", "True"],
      answer: "False",
    },

    // ... (your quiz questions)
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60); // Set the total quiz time to 60 seconds

  useEffect(() => {
    let timer; // Define the timer variable

    if (!quizCompleted) {
      timer = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          clearInterval(timer);
          handleQuizCompletion();
        }
      }, 1000);
    } else {
      // Clear the timer when the quiz is completed
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, quizCompleted]);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedOption === null) {
      setSelectedOption(selectedAnswer);
      if (selectedAnswer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      setTimeout(() => {
        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          handleQuizCompletion();
        }
      }, 1000);
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Quiz Page</h1>
      {!quizCompleted ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Question {currentQuestion + 1}</h2>
            <p className="card-text">{questions[currentQuestion].question}</p>
            <ul className="list-group">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  className={`list-group-item ${
                    isOptionSelected(option) ? "selected-option" : ""
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  <span className="option-icon">
                    {isOptionSelected(option) ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="far fa-circle"></i>
                    )}
                  </span>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-exam-online-exam-concept-questionnaire-form_675567-2793.jpg"
            alt=""
          />
          <h2>Quiz Completed!</h2>
          <p>
            Your Score is: {score} out of {questions.length}
          </p>
          {/* Add a button to navigate back to the home page using React Router */}
          <Link to="/">
            <button className="btn btn-success">Back to Home</button>
          </Link>
        </div>
      )}

      {/* Display the remaining time outside of the card */}

      {quizCompleted ? null : (
        // Display the remaining time only if the quiz is not completed
        <div className="time-remaining">Time Remaining: {timeLeft} seconds</div>
      )}
    </div>
  );
}

export default Quiz;
