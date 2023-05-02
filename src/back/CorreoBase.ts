import { Usuario } from './Usuario';

export abstract class CorreoBase {
    private asunto: string;
    private contenido: string;
    private emisor: Usuario;

    constructor(asunto: string, contenido: string, emisor: Usuario) {
        this.asunto = asunto;
        this.contenido = contenido;
        this.emisor = emisor;
    }

    public getAsunto(): string {
        return this.asunto;
    }

    public setAsunto(asunto: string): void {
        this.asunto = asunto;
    }

    public getContenido(): string {
        return this.contenido;
    }

    public setContenido(contenido: string): void {
        this.contenido = contenido;
    }

    public getEmisor(): Usuario {
        return this.emisor;
    }

    public setEmisor(emisor: Usuario): void {
        this.emisor = emisor;
    }

    public imprimirEmisor(): string {
        return `${this.emisor.getApellido()} ${this.emisor.getNombre()} ${this.emisor.getEmail()}`;
    }
}
