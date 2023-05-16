import { Usuario } from '../Usuario';
import { createHash } from 'crypto';

export abstract class CorreoBase {
    public asunto: string;
    public contenido: string;
    public emisor: string;
    public fecha: Date;
    public hora: string;
    public id: string;

    constructor(asunto: string, contenido: string, emisor: string) {
        this.asunto = asunto;
        this.contenido = contenido;
        this.emisor = emisor;
        this.fecha = new Date();
        this.hora = this.getFormattedHour();
        this.id = this.generateId();
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

    private getFormattedHour(): string {
        const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
        return this.fecha.toLocaleTimeString([], options);
    }

    public getFecha(): string {
        const day = this.fecha.getDate().toString().padStart(2, '0');
        const month = (this.fecha.getMonth() + 1).toString().padStart(2, '0');
        const year = this.fecha.getFullYear();
        return `${day}/${month}/${year}`;
    }

    public getHora(): string {
        return this.hora;
    }

    public generateId(): string {
        const dataToHash = this.asunto + this.contenido + this.emisor + this.fecha.toISOString();
        const hash = createHash('sha256');
        hash.update(dataToHash);
        return hash.digest('hex');
    }
}
