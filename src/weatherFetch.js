import React,{useState, useEffect} from "react";
import axios from 'axios';
import './weather.css';
function WeatherFetch() {
    const key = '070ba7c347ebc6d7f19b6aec8619c623';
    const [city,setCity] = useState('');
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=' + key + '&units=metric')
            .then(res => {
                const weather_data = res.data;
                setCity(weather_data.name);
                setFeelsLike(weather_data.main.feels_like);
                setMainTemp(weather_data.main.temp);
                setDescription(weather_data.weather[0].description);
                setMain(weather_data.weather[0].main);
                setIconID(weather_data.weather[0].icon);
            })
    },[])
    return (
        <div className='main'>
            <div className='inner-main'>
                <img
                    src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}
                    alt='weather image'
                    style={{
                        visibility: city ? 'visible' : 'hidden',
                        opacity: city ? '1' : '0'
                    }}
                />

                <div
                    className='today'
                    style={{
                        visibility: city ? 'visible' : 'hidden',
                        opacity: city ? '1' : '0'
                    }}
                >
                    <span>Today</span>
                    <h1>{city}</h1>
                    <p>
                        Temperature: {Math.round(mainTemp)}
                        °C
                        <br/>
                        Feels Like: {Math.round(feels_like)}
                        °C
                    </p>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}


export default WeatherFetch;
