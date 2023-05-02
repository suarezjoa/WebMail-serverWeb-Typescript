import { CorreoBase } from './CorreoBase';
import { Usuario } from './Usuario';

export class Correo extends CorreoBase {
    private para: Set<Usuario> = new Set();

    constructor(asunto: string, contenido: string, remitente: Usuario) {
        super(asunto, contenido, remitente);
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
}
