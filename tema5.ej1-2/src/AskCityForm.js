import React, { Component } from 'react';
import Request from 'react-http-request';

class AskCityForm extends Component{
    
    constructor(props){
        super(props);
    }

    handleChange = () => {
        this.props.change( this.refs.city.value );
    }

    render() {
        return (
            <div className="jumbotron padded">
                <form>
                    <input type="text" className="form-control" placeholder="City" ref="city" />
                    <button type="button" onClick={this.handleChange} className="btn btn-primary btn-block">Change city</button>
                </form>
            </div>
        );
    }
}

export default AskCityForm;
                