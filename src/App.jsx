import { useState } from "react";
import Header from "./componets/Header.jsx"
import UserInput from "./componets/UserInput.jsx"
import Result from "./componets/Results.jsx";


function App() {

  const [userInput, setUserIput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserIput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater then zero</p>}
     { inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App
