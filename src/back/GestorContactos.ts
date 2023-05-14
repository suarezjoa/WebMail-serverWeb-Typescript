
import { IBusquedas } from "./Interfaces/Ibusquedas";
import { Usuario } from "./Usuario";
import { Contacto } from "./Contacto";

export class GestorContactos implements IBusquedas {
  private ListaContactos: Map<string, Contacto>;
  private propietario: Usuario;

  constructor(propietario: Usuario) {
    this.propietario = propietario;
    this.ListaContactos =  new Map<string, Contacto>();
  }

  public getPropietario(): Usuario {
    return this.propietario;
  }

  public agregarContacto(nombre: string, apellido: string,email: string,relacion: string): void {
    var crearContacto = new Contacto(nombre,apellido,email,relacion);
    this.ListaContactos.set(email,crearContacto);
}

  public EliminarContacto(email: string){
    this.ListaContactos.delete(email);
  }
  
  public obtenerContacto(email: string): Contacto | undefined {
    if (!this.ListaContactos.get(email))
    {
      return undefined;
    }
      return this.ListaContactos.get(email);
  }

  public datosDeContacto(email: string): string | undefined{
    const contactoSelec = this.obtenerContacto(email);
    if (!contactoSelec){
      return undefined;
    }
    return `${contactoSelec.getApellido()},${contactoSelec.getNombre()},${contactoSelec.getEmail()},${contactoSelec.getRelacion()}`;
  }

  public getContactos(): Map<string, Contacto> {
    return this.ListaContactos;
  }
}
