import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.module.css";
import Description from "./Description.jsx";
import Options from "../components/Options.jsx";
import Feedback from "./Feedback.jsx";
import js from "@eslint/js";

function App() {
  const [typeFeedback, setTypeFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setTypeFeedback((prevState) => (prevState[feedbackType] += 1));
  }

  return (
    <>
      <Description />
      <Options typeFeedback={typeFeedback} updateFeedback={updateFeedback} />

      <Feedback {...typeFeedback} />
    </>
  );
}

export default App;
