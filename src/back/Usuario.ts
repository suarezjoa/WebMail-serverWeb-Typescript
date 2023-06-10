import { GestorContactos } from "./GestorContactos";
import { IObserver } from "./Interfaces/IObserver";
import { ContenedorDeCorreos } from './bandejas/ContenedorDeCorreos';


export class Usuario implements IObserver {
    protected nombre: string;
    protected apellido: string;
    protected contrasenia: string;
    protected Email: string;
    public bandeja: ContenedorDeCorreos = new ContenedorDeCorreos();
    public contactos: GestorContactos;


    constructor(nombre: string, apellido: string, Email: string, contrasenia: string) {
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.apellido = apellido;
        this.Email = Email;
        this.contactos = new GestorContactos();
    }

    public update(): string  {

        return `Nuevo correo de ${this.bandeja.getEstadonotificacion()}`
        
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public getContrasenia(): string {
        return this.contrasenia;
    }

    public getEmail(): string {
        return this.Email;
    }

    public setEmail(Email: string): void {
        this.Email = Email;
    }

    public imprimir(): string {
        return "[Usuario] " + "datos: " + this.getNombre() + "," + this.getApellido() + "," + this.getEmail();
    }


}