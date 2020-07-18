import React from 'react';
import Navigator from './Navigator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from "./weatherBody";
import GetWeather from "./GetWeather";

function App() {
  return (
    <div className="App">

      {/*<button onClick={minusOperator}>-</button>
            <h2 id={"num"}>0</h2>
            <button onClick={plusOperator}>+</button>*/}
      {Navigator}
      {Body}
      <GetWeather />


    </div>
  );
}

export default App;
