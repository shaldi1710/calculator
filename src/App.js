import { useState } from 'react';
import * as math from "mathjs";

import './App.css';
import Button from "./Components/Button";
import Input from "./Components/Input";




const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult = () => {
    const input = text.join("");

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };


  return (
    <div className="App">
      <div className='calcu-wrapper'>
        <Input text={text} result={result} />
        <div className='row'>
          <div className='plus'><Button symbol="+" handleClick={addToText} /></div>
          <div className='minus'><Button symbol="-" handleClick={addToText} /></div>
          <div className='kali'><Button symbol="*" handleClick={addToText} /></div>
          <div className='bagi'><Button symbol="/" handleClick={addToText} /></div>

          <div className='lima'><Button symbol="7"  handleClick={addToText} /></div>
          <div className='enam'><Button symbol="8"  handleClick={addToText} /></div>
          <div className='tujuh'><Button symbol="9"  handleClick={addToText} /> </div>
          <div className='delapan'><Button symbol="=" color="coral" handleClick={calculateResult} /></div>
          
          <div className='sembilan'><Button symbol="4"  handleClick={addToText} /></div>
          <div className='sepuluh'><Button symbol="5"  handleClick={addToText} /></div>
          <div className='sebelas'><Button symbol="6"  handleClick={addToText} /></div>
          <div className='duabelas'><Button symbol="1"  handleClick={addToText} /></div>


          <div className='tigabelas'><Button symbol="2"  handleClick={addToText} /></div>
          <div className='empatbelas'><Button symbol="3"  handleClick={addToText} /></div>
          <div className='limabelas'><Button symbol="0"  handleClick={addToText} /></div>
          <div className='enambelas'><Button symbol="."  handleClick={addToText} /></div>

          <div className='tujuhbelas'><Button symbol="AC"  handleClick={resetInput} /></div>
          {/* <div classname='row18'><Button symbol="" color="white" handleClick={addToText} /></div>
          <div className='row19'><Button symbol="AC" color="white" handleClick={addToText} /></div>
          <div className='row20'><Button symbol="" color="white" handleClick={addToText} /></div> */}



        </div>
      </div>
    </div>
  );
}

export default App;
