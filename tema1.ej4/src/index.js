import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Persona from './Persona';
import Adulto from './Adulto';
import Joven from './Joven';

let persona= new Persona('Pascual María', 'Rebolledo', 63);
let adulto=new Adulto('Rodolfo Javier', 'Vergara', 65, 'Encofrador', 'Audi R8');

var a=[];
a.push(new Adulto('Rodolfo Javier', 'Molinero', 65, 'Encofrador', 'Audi R7'));
a.push(new Adulto('Giusseppe María', 'Vergara', 21, 'Francotirador', 'Audi R6'));
a.push(new Adulto('Borja Gustäff', 'Ñíguez', 23, 'Usurero', 'Audi R5'));
a.push(new Joven('Siro', 'Páez', 5, 'C.P. Las Cañadas', 800));


const element = (<ul>
    {a.map((value, index) => {
            return <li>{value.mostrar()}</li>;
        })}
</ul>);

ReactDOM.render(
    <div>
        {persona.hablar()}<br/>
        {adulto.mostrar()}
        {element}
    </div>, 
    document.getElementById('root')
);