import React from "react";

const BodyHead = () => {
    return(
        <div>
            <header className="jumbotron" style={{paddingBottom: "0 px"}}>
                <div className="container" style={{paddingTop: "0 px"}}>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Weather Today</h1>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p>This segment of the website displays location's weather using a web API from
                                openweathermap!</p>

                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default BodyHead;