import React, { useState, useEffect } from "react";
import './Api.css'

const WeatherApi = () => {
    const [state, setState] = useState()
    const [search, setsearch] = useState('delhi')

    useEffect(() => {
        const FetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=e0009158c56d3316825e5e2f8660c458`
            const responnse = await fetch(url)
            const resjson = await responnse.json()
            // console.log(resjson )
            setState(resjson.main)
            // setState(resjson.wind)

        }
        FetchApi()
    }, [search])
    return (
        <>
            <div className="box">

                <div className="containor">
                    <h1 className="header"> Weather App</h1>
                    <input type="text" placeholder="...type" value={search} className="inputField" onChange={(e) => { setsearch(e.target.value) }} />
                    {/* <button onClick={searchweather}>click</button> */}

                    {!state ? <p>No Data Found</p> :
                        <div>
                            <h1 className="cityName">
                                🌦️ {search}
                            </h1>

                            <h1 className=""> Temp: <span className="Temp"> {state.temp}</span> </h1>
                            <h3 className=""> Humidity: <span className="Humi">{state.humidity}</span> </h3>
                            <p className=""> Temp_minmax: <span className="min_max"> {state.temp_min} || {state.temp_max} </span></p>

                        </div>
                    }

                </div>

            </div>


        </>
    )
}

export default WeatherApi;