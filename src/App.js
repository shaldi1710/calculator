import { useState } from "react";
import * as math from "mathjs";

import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

const App = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");

  const addToText = (type, value) => {
    if (type === "number") {
      if (!operator) {
        setNumber1((number) => `${number}${value}`);
      } else {
        setNumber2((number) => `${number}${value}`);
      }
    }

    if (type === "operator") {
      if (!operator) {
        if (number1) {
          setOperator(value);
        }
      } else {
        calculateResult();
        console.log("time to calculate");
      }
    }
  };

  console.log({
    number1,
    number2,
    operator,
  });

  const calculateResult = () => {
    if (number1 && number2) {
      const result = math.evaluate(number1 + operator + number2);
      setNumber1(result);
      setNumber2("");
      setOperator("");
    }
  };

  const resetInput = () => {
    setNumber1("");
    setNumber2("");
    setOperator("");
  };

  return (
    <div className="App">
      <div className="calcu-wrapper">
        <Input text={number2 ? number2 : number1} result="" />
        <div className="row">
          <Button
            type="operator"
            className="plus"
            symbol="+"
            handleClick={addToText}
          />
          <div className="minus">
            <Button type="operator" symbol="-" handleClick={addToText} />
          </div>
          <div className="kali">
            <Button type="operator" symbol="*" handleClick={addToText} />
          </div>
          <div className="bagi">
            <Button type="operator" symbol="/" handleClick={addToText} />
          </div>

          <div className="lima">
            <Button type="number" symbol="7" handleClick={addToText} />
          </div>
          <div className="enam">
            <Button type="number" symbol="8" handleClick={addToText} />
          </div>
          <div className="tujuh">
            <Button type="number" symbol="9" handleClick={addToText} />{" "}
          </div>
          <div className="delapan">
            <Button
              type="operator"
              symbol="="
              color="coral"
              handleClick={calculateResult}
            />
          </div>

          <div className="sembilan">
            <Button type="number" symbol="4" handleClick={addToText} />
          </div>
          <div className="sepuluh">
            <Button type="number" symbol="5" handleClick={addToText} />
          </div>
          <div className="sebelas">
            <Button type="number" symbol="6" handleClick={addToText} />
          </div>
          <div className="duabelas">
            <Button type="number" symbol="1" handleClick={addToText} />
          </div>

          <div className="tigabelas">
            <Button type="number" symbol="2" handleClick={addToText} />
          </div>
          <div className="empatbelas">
            <Button type="number" symbol="3" handleClick={addToText} />
          </div>
          <div className="limabelas">
            <Button type="number" symbol="0" handleClick={addToText} />
          </div>
          <div className="enambelas">
            <Button type="number" symbol="." handleClick={addToText} />
          </div>

          <div className="tujuhbelas">
            <Button type="number" symbol="AC" handleClick={resetInput} />
          </div>
          {/* <div classname='row18'><Button symbol="" color="white" handleClick={addToText} /></div>
          <div className='row19'><Button symbol="AC" color="white" handleClick={addToText} /></div>
          <div className='row20'><Button symbol="" color="white" handleClick={addToText} /></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
