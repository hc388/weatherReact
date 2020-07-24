import React from "react";

class Form extends React.Component{
    constructor() {
        super();
        this.state = {
            location: ""
        }
    }
    submitHandler(e){
        e.preventDefault()
        this.props.getCity(this.state.location);
    }
    render() {
        return(
            <div id="cityForm">
                <form id="nameform">

                    <div  className="form-group">
                        <label htmlFor="location" >CityName</label><br/>
                        <input className="form-control col-md-6 offset-md-3" id="CityName" value={this.state.location} placeholder={"Enter Location"} onChange={e => this.setState({location: e.target.value})}/>
                        <small className="form-text text-muted">We'll soon include dropdown support.</small>
                    </div>

                    <button type="submit"  className="btn btn-primary col-md-5" onClick={(e) => this.submitHandler(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;