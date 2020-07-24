import React from "react";
import showLocation from "./showLocation";
import SearchLocationInput from "./autoComplete";
import Form from './Form'
import BodyHead from "./BodyHead";
import ApiCall from "./apiCall";

class WeatherComp extends React.Component {

    constructor() {
        super();
        this.state = {
            location: "",
            temp: "00",
            desc: "It's a Chilly but beautiful day in Wonderland",
            iconUrl: ""
        }
    }

    getCity = fields => {
        console.log("App component got the city: ", fields)
        this.setState(
            {location: fields}
        )
    }

    getNewCity = fields => {
        console.log("App component got the obj: ", fields)
        this.getCity(fields.address_components[0].long_name)
    }

    retrieveData = dataObj => {
        console.log("The api object inside main is: ", dataObj)
        this.setState(
            {
                location: dataObj.location,
                temp: dataObj.temp,
                desc: dataObj.desc,
                iconUrl: dataObj.iconUrl
            }
        )
    }

    render() {
        return (
            <div>
                <BodyHead/>
                <div className="container1" style={{paddingTop: "20px"}}>
                    <div className="geoType">
                        <h3>User GeoLocation Based Weather</h3>
                        Please allow location access in order to access this feature.
                        <div>
                            <h2 className="city">{this.state.location}</h2>
                            <div className="middle">
                                <img src={require('./sunnyDay.jpg')} alt={this.state.iconUrl} id="icon" height="50px"/>
                                <div className="degrees">
                                    <h1 id="temp">{this.state.temp}</h1>
                                    <span>&#176;</span>
                                </div>
                                <h3 id="desc" style={{fontWeight: "lighter"}}>{this.state.desc}</h3>
                            </div>
                        </div>
                    </div>
                    {/*<Form getCity={fields => this.getCity(fields)}/>*/}
                </div>
                <div className="container1 cityType col-md-6">
                    <SearchLocationInput getNewCity={fields => this.getNewCity(fields)}/>
                    <ApiCall city={this.state.location} key={this.state.location}
                             retrieveData={dataObj => this.retrieveData(dataObj)}/>
                </div>
            </div>

        )
    }
}

export default WeatherComp;