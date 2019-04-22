import React from 'react';
import './Formulario.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre: '' ,
            apellidos: '',
            edad: 0,
            profesion: '',
            cadenaRes: ''
        }
    }

    manejarCambios = (event) => {
        const name = event.target.name;
        this.setState ({[name]: event.target.value});
    }

    cadenaResultado = () =>{
        var res= "Nombre: " + this.state.nombre + 
        ", Apellidos: " + this.state.apellidos +
        ", Edad: " + this.state.edad +
        ", Profesión: " + this.state.profesion;

        return res;
    }

    manejarEnvio = (event) => {
        this.setState ({cadenaRes: this.cadenaResultado()});
        console.log(this.state.cadenaRes);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.manejarEnvio}>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={this.state.nombre} onChange={this.manejarCambios} />
                <br/>
                <label>Apellidos:</label>
                <input type="text" name="apellidos" value={this.state.apellidos} onChange={this.manejarCambios} />
                <br/>
                <label>Edad:</label>
                <input type="number" name="edad" value={this.state.edad} onChange={this.manejarCambios} />
                <br/>
                <label>Profesión:</label>
                <input type="text" name="profesion" value={this.state.profesion} onChange={this.manejarCambios} />
                <br/>

                <input type="submit" value="Enviar" />
                <p id="res">{this.state.cadenaRes}</p>
            </form>
        );
    }
}

export default Formulario;