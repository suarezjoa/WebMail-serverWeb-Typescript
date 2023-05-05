/*

import { IBusquedas } from "./Interfaces/Ibusquedas";
import { Usuario } from "./Usuario";

export class GestorContactos implements IBusquedas {
  private contactos: Array<string>;
  private propietario: Usuario;

  constructor(propietario: Usuario) {
    this.propietario = propietario;
    this.contactos =  new Array<string>();
  }

  public getPropietario(): Usuario {
    return this.propietario;
  }

  public agregar(gmailDelNuevoContacto: string): void {
    this.contactos.push(gmailDelNuevoContacto);
  }

  public eliminar(correo: string): void {
    this.contactos.splice(this.contactos.indexOf(correo),1);
}

  public imprimir(): string {
    let imprimir: string = "";
    for (const u of this.contactos.values()) {
      imprimir += u.imprimir();
    }
    return imprimir;
  }

  public obtenerUsuario(email: string): string {

      return this.contactos.get(email);
  }

  public datosDeUsuario(email: string): string {
    const usuario: Usuario = this.obtenerUsuario(email);
    return `${usuario.getApellido()},${usuario.getNombre()},${usuario.getEmail()}`;
  }

  public getContactos(): Map<string, Usuario> {
    return this.contactos;
  }
}*/
