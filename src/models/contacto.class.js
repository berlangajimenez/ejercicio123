export class Contacto{
    nombre = "";
    apellido = "";
    mail = "";
    conectado = false;

    constructor(nombre, apellido, mail, conectado){
        this.nombre = nombre;
        this.mail = mail;
        this.apellido = apellido;
        this.conectado = conectado;
    }
    
}