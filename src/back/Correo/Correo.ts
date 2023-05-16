import { CorreoBase } from './CorreoBase';

export class Correo extends CorreoBase {
    private para: Set<string>;

    constructor(asunto: string, contenido: string, remitente: string) {
        super(asunto, contenido, remitente);
        this.para = new Set<string>();
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

}
