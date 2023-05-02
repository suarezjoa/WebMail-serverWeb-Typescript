import { IAccionesBandeja } from './Interfaces/IAccionesBandeja';
import { Correo } from './Correo';
import { Filtro } from './Filtro';

export class Usuario {
    protected nombre: string;
    protected apellido: string;
    protected Email: string;
    private bandeja: IAccionesBandeja;

    constructor(nombre: string, apellido: string, Email: string, bandeja: IAccionesBandeja) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.Email = Email;
        this.bandeja = bandeja;
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

    public getEmail(): string {
        return this.Email;
    }

    public setEmail(Email: string): void {
        this.Email = Email;
    }

    public imprimir(): string {
        return "[Usuario] " + "datos: " + this.getNombre() + "," + this.getApellido() + "," + this.getEmail();
    }

    public enviarCorreo(correoEnviado: Correo): void {
        const iterador = correoEnviado.getPara()[Symbol.iterator]();

        for (const usuario of iterador) {
            usuario.bandeja.agregarABandeja(correoEnviado);
        }

        this.bandeja.agregarABandeja(correoEnviado);
    }

    public mostrarCorreos(): string {
        return this.bandeja.mostrarCorreos();
    }

    public mostrarCorreosfiltrados(filtro: Filtro): string {
        return this.bandeja.mostrarCorreosfiltrados(filtro);
    }
}