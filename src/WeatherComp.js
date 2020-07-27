import React from "react";
import SearchLocationInput from "./autoComplete";
import Form from './Form'
import BodyHead from "./BodyHead";
import ApiCall from "./apiCall";
import FetchLocation from "./FetchLocation";

class WeatherComp extends React.Component {

    constructor() {
        super();
        this.state = {
            location: "",
            temp: "",
            desc: "",
            iconUrl: "",
            dataObj: ""
        }
    }

    componentDidMount() {
        let currentComponent = this
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            let URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&key=AIzaSyCI3Rpo_03gKdVow10kkbQMSeIpzFSB89c"
                console.log(URL)
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    console.log("The location from lat and long is: ", data)
                    let cityData = data.results[5].address_components[1].long_name
                    currentComponent.setState({
                        location: cityData
                    })


                })



        });

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

                        <FetchLocation lat={this.state.latitude} long={this.state.longitude}/>

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

                    {
                        (this.state.location !== "") &&
                        <ApiCall city={this.state.location} key={this.state.location}
                                 retrieveData={dataObj => this.retrieveData(dataObj)}/>

                    }

                </div>
            </div>

        )
    }
}

export default WeatherComp;