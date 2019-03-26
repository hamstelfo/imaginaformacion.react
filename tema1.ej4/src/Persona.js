class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    nombreCompleto() {
        return this.nombre + " " + this.apellidos;
    }
    hablar() {
        return "La persona " + this.nombreCompleto() + " está hablando";
    }
}
export default Persona;