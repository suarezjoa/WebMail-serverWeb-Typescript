
import  { Correo } from "../Correo";
import {  IFiltros } from '../Interfaces/IFiltros';
import {IAccionesBandeja} from "../Interfaces/IAccionesBandeja"
import { Observable, of } from 'rxjs';
/*import BandejaDeEnvios from './BandejaDeEnvios';
import  BandejaDeRecibidos  from "./BandejaDeRecibidos";*/


export class ContenedorDeCorreos implements IAccionesBandeja, IFiltros {

    private todosLosCorreos: Correo[] = [];
    private bandejaDeEnvios: Correo[] = [];
    private bandejaDeEntrada: Correo[] = []; 

    constructor() {
      
    }
    

    public agregarABandeja (correo: Correo ) : void {

      this.todosLosCorreos.push(correo);

    }

    public CorreoEnviado (correo: Correo ) : void{

      this.agregarABandeja(correo);
      this.bandejaDeEnvios.push(correo);

    }
    public CorreoRecibido (correo: Correo ) : void{

      this.agregarABandeja(correo);
      this.bandejaDeEntrada.push(correo);

    }

    public getTodosLosCorreos () : Correo[] {

      return this.todosLosCorreos ;

    }
    public mostrarCorreos(): string {
      let imprimir: string = "";
      for (const c of this.todosLosCorreos) {
        imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
      }
      return imprimir;
    }
    public mostrarCorreosfiltrados(filtro: { getPredicado(): (correo: Correo) => boolean }): string {
      const correosListaFiltrada = this.todosLosCorreos.filter(filtro.getPredicado());
      return this.mostrarCorreosAUX(correosListaFiltrada);
    }
    
    public filtroPorAsunto(asunto: string): Observable<Correo[]> {
      const correosFiltrados = this.todosLosCorreos.filter((correo) => correo.getAsunto() === asunto);
      return of(correosFiltrados);
    }
  
  
  
    public filtroPorContenido(contenido: string): Observable<Correo[]> {
      const correosFiltrados = this.todosLosCorreos.filter((correo) => correo.getContenido() === contenido);
      return of(correosFiltrados);
    }
  
  
    public filtroPorEmisor(usuario: string): Observable<Correo[]> {
      return of(this.todosLosCorreos.filter((correo) => correo.getEmisor() === usuario));
  }
  
    public mostrarCorreosAUX(lista: Correo[]): string {
      let imprimir: string = "";
      for (const c of lista) {
        imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
      }
      return imprimir;
    }
    // Métodos y propiedades de la clase BandejasDeUsuario
  }
  