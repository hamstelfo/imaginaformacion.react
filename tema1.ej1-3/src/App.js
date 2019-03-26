import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const persona= {
  nombre: "Pascual",
  edad: 50
};

function pintaPersona(p)
{
  return "Hola, soy " + p.nombre + " y tengo "  + p.edad +" años";
}

class App extends Component {
  render() {
    return (
      <h1>{pintaPersona(persona)}</h1>
    );
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hola Mundo!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esta es mi primera aplicación con React
          </a>
        </header>
      </div>
    );*/
  }
}

export default App;
