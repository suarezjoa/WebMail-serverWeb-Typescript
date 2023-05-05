import { IAccionesBandeja } from './Interfaces/IAccionesBandeja';
import { Correo } from './Correo';
import { Filtro } from './Filtro';
import { ContenedorDeCorreos } from './bandejas/ContenedorDeCorreos';

export class Usuario {
    protected nombre: string;
    protected apellido: string;
    protected Email: string;
    private bandeja: ContenedorDeCorreos = new ContenedorDeCorreos();

    constructor(nombre: string, apellido: string, Email: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.Email = Email;
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
        const usuariosDestinatarios = correoEnviado.getPara();
    
        for (const usuario of usuariosDestinatarios) {
            if (usuario instanceof Usuario) {
                usuario.bandeja.CorreoEnviado(correoEnviado);
            }
        }
        
        this.bandeja.CorreoEnviado(correoEnviado);
    }
    public mostrarCorreos(): string {
        return this.bandeja.mostrarCorreos();
    }

    public mostrarCorreosfiltrados(filtro: Filtro): string {
        return this.bandeja.mostrarCorreosfiltrados(filtro);
    }
}