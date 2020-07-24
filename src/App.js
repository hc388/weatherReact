import React from 'react';
import Navigator from './Navigator'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from "./weatherBody";
import GetWeather from "./GetWeather";
import './styles.css';
import WeatherComp from './WeatherComp'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName : ""
        }
    }
    render() {
        return (
            <div className="App">

                {/*<button onClick={minusOperator}>-</button>
            <h2 id={"num"}>0</h2>
            <button onClick={plusOperator}>+</button>*/}
                {Navigator}
                <WeatherComp />


            </div>
        );
    }
}

export default App;
