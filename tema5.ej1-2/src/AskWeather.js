import React, { Component } from 'react';
import Request from 'react-http-request';
import AskCityForm from './AskCityForm';

class AskWeather extends Component{
    
    constructor(){
        super();
        this.city= "Fuengirola";
        this.urlWeather= this.setUrlWeather(this.city);
        this.state={
            city: this.city,
            urlWeather: this.urlWeather
          };
        this.changeCity = this.changeCity.bind(this);
        this.updateUrlWeather = this.updateUrlWeather.bind(this);
        this.setUrlWeather = this.setUrlWeather.bind(this);

        //this.updateUrlWeather();
    }

    updateUrlWeather(){
        if( this.city ){
            this.urlWeather= this.setUrlWeather(this.city);
            this.setState({ city: this.city, urlWeather: this.urlWeather });
            //console.log(this.state);
          }
    }

    setUrlWeather(city)
    {
        return "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5aa82f6c6baaebeb11c9d322e2cf6927";
    }

    changeCity(city) {
        if( city ){
          this.city= city;
          this.updateUrlWeather();
          //console.log(this.state);
        }
      }
    
    render() {
        return (
            
                    
<div>
    <h1>Ask weather</h1>
    <AskCityForm change={this.changeCity}></AskCityForm>
    <Request
            url={this.urlWeather}
            method='get'
            accept='application/json'
            verbose={true}>
                {({error, result, loading}) => {
                    if (error)
                    {
                        return <div>
                                    <p>Weather: {this.city} is not a valid</p>
                                </div>;
                    }
                    else{
                        if (loading) {
                            return <div>loading...</div>;
                        } else {
                            var obj = JSON.stringify(result.body)
                            var obj2 = JSON.parse(obj)
                            //console.log(obj2)
                            return <div>
                                    <p>Weather in {this.city}: {obj2.weather[0].description}</p>
                                </div>;
                        }
                    }                    
                }
                }
    </Request>
</div>           
        );
    }
}

export default AskWeather;
                