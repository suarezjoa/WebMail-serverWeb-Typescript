import { CorreoBase } from './CorreoBase';

export class Correo extends CorreoBase {
    private para: Set<string>;
    public fecha: Date;
    public hora: string;
    

    constructor(asunto: string, contenido: string, remitente: string) {
        super(asunto, contenido, remitente);
        this.para = new Set<string>();
        this.fecha = new Date();
        this.hora = this.getFormattedHour();
    }

    public agregarPara(destinatario: string): void {
        this.para.add(destinatario);
    }

    public cantidadReceptor(): number {
        return this.para.size;
    }

    public getPara(): Set<string> {
        return this.para;
    }
    public setPara(contactoAEnviar: string): void {
        this.para.add(contactoAEnviar);
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

}
