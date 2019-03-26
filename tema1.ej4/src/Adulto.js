import Persona from './Persona';
class Adulto extends Persona {
    constructor(nombre, apellidos, edad, trabajo, coche) {
        super(nombre, apellidos, edad);
        this.trabajo = trabajo;
        this.coche = coche;
    }
    mostrar() {
        return "La Persona " + this.nombreCompleto() + " es un Adulto y trabaja en '" + this.trabajo +"'.¿Tiene coche ? " + this.coche;
    }
}
export default Adulto;