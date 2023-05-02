import { IBusquedas } from "./Interfaces/Ibusquedas";
import { Usuario } from "./Usuario";

export class GestorContactos implements IBusquedas {
  private contactos: Map<string, Usuario> = new Map<string, Usuario>();
  private propietario: Usuario;

  constructor(propietario: Usuario) {
    this.propietario = propietario;
  }

  public getPropietario(): Usuario {
    return this.propietario;
  }

  public agregar(usuario: Usuario): void {
    this.contactos.set(usuario.getEmail(), usuario);
  }

  public eliminar(correo: string): void {
    this.contactos.delete(correo);
  }

  public imprimir(): string {
    let imprimir: string = "";
    for (const u of this.contactos.values()) {
      imprimir += u.imprimir();
    }
    return imprimir;
  }

  public obtenerUsuario(email: string): Usuario {
    return this.contactos.get(email);
  }

  public datosDeUsuario(email: string): string {
    const usuario: Usuario = this.obtenerUsuario(email);
    return `${usuario.getApellido()},${usuario.getNombre()},${usuario.getEmail()}`;
  }

  public getContactos(): Map<string, Usuario> {
    return this.contactos;
  }
}
