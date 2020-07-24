import React from "react";


/*
const ApiCall = (props) => {
    console.log(props)

    console.log("the api calls you", props.city)
    return(

        <div>
            <h3>Hey This is the apiCalling you for {props.city}.</h3>
            <h5>{props.city}</h5>
        </div>
    )
}
*/

class ApiCall extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            location: this.props.city,
            temp: "",
            desc: "",
            iconUrl: ""
        }
        this.requestWeather = this.requestWeather.bind(this)
        this.updatesDOM = this.updatesDOM.bind(this)
    }

    requestWeather(location) {
        document.title = "Weather Today in " + location;
        console.log("WEATHER TODAY IN : ", location)
        let URL = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.location + "&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0";
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                /*var city = data.name;
                var temp = Math.round(data.main.temp_max);
                var desc = data.weather[0].description;
                var icon = data.weather[0].icon;*/
                this.updatesDOM(data)
            })
    }

     updatesDOM(data) {

        console.log("THE OBJECT IS:::::", data);
        if(data.cod !== "400" ) {

            let icontemp = "https://visualpharm.com/assets/756/Sun-595b40b65ba036ed117d3468.svg"
            // var finalIconUrl = "http://openweathermap.org/img/w/" + icontemp + ".png";
            this.setState({
                location: data.name,
                temp: Math.round(data.main.temp),
                desc: data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1),
                iconUrl: icontemp
            })
            this.props.retrieveData(this.state)
        }

        /*$('#logger').attr('href',iconUrl);
        //con = (HttpURLConnection) ( new URL(IMG_URL + icon +".png")).openConnection();

        $('.city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', iconUrl);
        return 0;*/

    }
    componentDidMount() {
        console.log("I also got the city", this.props.city)
        console.log("I'm setting the city "+this.props.city+ "to the state as: "+this.state.location)
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.location+"&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0")
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                this.updatesDOM(data)
            })
    }


        /*if(this.state.location !== this.props.city) {
            /!*this.setState({
                    location: this.props.city
                }
            )*!/
            console.log("I'm setting the city "+this.props.city+ "to the state as: "+this.state.location)
            if(this.state.location !== undefined ) {
                console.log("I'm passing the following location: ", this.state.location)
                this.requestWeather(this.state.location)
            }
        }*/

    render() {




        return(
            <div>
                This is the APi CAlling you for: {this.state.location}.
                {URL}
                <br/>
            </div>
        )
    }
}


    //when to do api call --> when any of the options on the autoplaces is clicked or when the submit button is clicked.
    //the call should pass the object as the props.
    //catch the object here and then grab the city name out of it and then use it to call the api and grab the data needed.

    /*componentDidMount() {
        var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.cityName + "&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0";
        console.log("THE URL INSIDE API CLASS IS: ", URL);
    }
const ApiCall = () => {
    return(
        <div>
            {console.log("Api was called")}
            <h1>Hello World</h1>
        </div>
    )
}
*/

export default ApiCall;