import { CorreoBase } from './CorreoBase';
import { Usuario } from './Usuario';

export class Correo extends CorreoBase {
    private para: Set<Usuario>;

    constructor(asunto: string, contenido: string, remitente: string) {
        super(asunto, contenido, remitente);
        this.para = new Set<Usuario>();
    }

    public agregarPara(destinatario: Usuario): void {
        this.para.add(destinatario);
    }

    public cantidadReceptor(): number {
        return this.para.size;
    }

    public getPara(): Set<Usuario> {
        return this.para;
    }
    public setPara(contactoAEnviar: Usuario): void {
        this.para.add(contactoAEnviar);
    }

}
