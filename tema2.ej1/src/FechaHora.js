import React, { Component } from 'react';
import './FechaHora.css';

class FechaHora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            interval: parseInt(this.props.interval),
            showMessage: (this.props.showMessage=='true')?true:false,
            message: this.props.message
        };
    }

    getFecha() {
        var fechaClass= "fecha";

        if (!this.state.showMessage)
        {
            fechaClass= fechaClass + ' no-message';
        }

        return (
            <div className={fechaClass}>
                <p className="message">{this.state.message}{this.state.showMessage}</p>
                <p>Fecha: {this.state.date.toLocaleDateString()}</p>
            </div>
        );
    };
    getHora() {
        return (
            <div className="hora">
                <p>Hora: {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.state.interval
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                {this.getFecha()}
                {this.getHora()}
            </div>
        );
    }
}
export default FechaHora;