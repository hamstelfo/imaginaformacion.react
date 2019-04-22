import React, { Component } from 'react';
import './MouseColor.css';
class MouseColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: {
                red: 123,
                green: 234,
                blue: 221
            },
            locked: false
        };

        this.manejoMovimientoRaton = this.manejoMovimientoRaton.bind(this);
        this.applyRandomColor = this.applyRandomColor.bind(this);
        this.lockUnlock = this.lockUnlock.bind(this);
    }

    lockUnlock(event){
        var prevLock= this.state.locked;
        this.setState({
            locked: !prevLock
        });
    }

    manejoMovimientoRaton(event) {
        if (this.state.locked){
            return false;
        }
        this.setState({
            color: {
                red: event.clientX,
                green: event.clientY,
                blue: event.clientX
            }
        });
    }

    applyRandomColor(event){
        if (this.state.locked){
            return false;
        }
        this.setState({
            color: {
                red: Math.floor(Math.random() * 256),
                green: Math.floor(Math.random() * 256),
                blue: Math.floor(Math.random() * 256)
            }
        });
    }

    render() {
        return (
            <div className="contenedor" 
                onDoubleClick={this.lockUnlock}
                onMouseEnter={this.applyRandomColor} 
                onMouseLeave={this.applyRandomColor} 
                onMouseMove={this.manejoMovimientoRaton} 
                style={{
                backgroundColor:
                    'rgb(200,' + this.state.color.green + ',' + this.state.color.blue + ')'
            }}>
                {this.state.color.green}
                <br />
                {this.state.color.blue}
            </div>
        );
    }
}
export default MouseColor;