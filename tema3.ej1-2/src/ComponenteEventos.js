import React, { Component } from 'react';

class ComponenteEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: ""
        };
        this.manejaPulsacionTeclado = this.manejaPulsacionTeclado.bind(this);
        this.manejaKeyDown= this.manejaKeyDown.bind(this);
    }

    manejaPulsacionTeclado(event) {
        console.log(event);
        let texto = this.state.texto + event.key;
        this.setState({ texto: texto });
    }

    manejaKeyDown(event){
        console.log(event.keyCode);
        if (event.keyCode===8){
            var texto= this.state.texto;
            var str= texto.substring(0, texto.length - 1);
            this.setState({texto: str});
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.manejaPulsacionTeclado} onKeyDown={this.manejaKeyDown}></input>
                {this.state.texto}
            </div>
        );
    }
}

export default ComponenteEventos;