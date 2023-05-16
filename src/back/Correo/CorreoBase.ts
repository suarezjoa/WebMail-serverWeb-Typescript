import { Usuario } from '../Usuario';

export abstract class CorreoBase {
    public asunto: string;
    public contenido: string;
    public emisor: string;

    constructor(asunto: string, contenido: string, emisor: string) {
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

    public getEmisor(): string {
        return this.emisor;
    }

    public setEmisor(emisor: string): void {
        this.emisor = emisor;
    }
}
