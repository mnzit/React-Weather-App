import React, {Component} from 'react';
import {WeatherService} from "../../services/WeatherService";
import TextField from '@material-ui/core/TextField';
import {Button, Container} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import Weather from "./weather";

class WeatherWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: false, initial: false, found: false}
    }


    find = () => {
        if(this.state.cityName){
            if(this.state.cityName.length > 0){
                this.setState({loading: true})
                WeatherService
                    .getCurrentWeatherData(this.state.cityName)
                    .then((data) => {
                        this.setState({
                            loading: false,
                            initial:true,
                            found: true,
                            data: this.mapResponse(data.data)
                        })
                    })
                    .catch((error) => {
                        console.error(`Error :${error}`);
                        this.setState({
                            loading: false,
                            initial: true,
                            found:false
                        });
                    });
            }else{
                alert("Enter city name");
            }
        }else{
            alert("Enter city name");
        }
    }

    mapResponse(externalResponse) {
        return {
            name: externalResponse.name,
            humidity: externalResponse.main.humidity,
            country: externalResponse.sys.country,
            windSpeed: externalResponse.wind.speed,
            temp: externalResponse.main.temp
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (

            <Container fixed style={{display:"block", margin: "auto"}}>
                <h1>Weather App</h1>
                <TextField
                    id="outlined-error-helper-text"
                    label="City Name"
                    variant="outlined"
                    onChange={this.handleChange}
                    name="cityName"
                />
                <Button variant="contained" style={{margin: "9px"}} onClick={this.find}>Search</Button>
                <div>
                    {
                        this.state.loading ?
                            <CircularProgress/> :
                                <Weather data={this.state.data} found={this.state.found} initialized={this.state.initial}/>
                    }
                </div>
            </Container>
        );
    }
}

export default WeatherWrapper;
