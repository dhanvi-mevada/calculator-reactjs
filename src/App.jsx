import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/display";
import ButtonContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
    </center>
  );
}

export default App;
