
import  { Correo } from "../Correo/Correo";
import {  IFiltros } from '../Interfaces/IFiltros';
import { IStrategyBandejas } from "../Interfaces/IStrategyBandejas"
import { Observable, of } from 'rxjs';
import { IObserver } from '../Interfaces/IObserver';

export class ContenedorDeCorreos implements IStrategyBandejas, IFiltros {

    public todosLosCorreos: Correo[] = [];
    public bandejaDeEnvios: Correo[] = [];
    public bandejaDeEntrada: Correo[] = []; 
    public bandejaDeFavorito: Correo [] = [];
    private ObservadorCuenta: IObserver | null = null;
    private Estadonotificacion: string = "";

    constructor() {
    }

    public agregarObservador(observer: IObserver): void {

      this.ObservadorCuenta = observer;

    }
    
    public getEstadonotificacion(): string {
      
      return this.Estadonotificacion;

    }
    public setEstadonotificacion(nuevoEstado: string): void {

      this.Estadonotificacion = nuevoEstado;
      this.notificarObsrvadores();

    }
    public notificarObsrvadores(): void | null {

      if(this.ObservadorCuenta == null){
        return null;
      }else{
        this.ObservadorCuenta.update(``);
      }

    }

    public agregarABandeja (correo: Correo ) : void {

      this.todosLosCorreos.push(correo);

    }
    
    public CorreoEnviado (correo: Correo ) : void{

      this.agregarABandeja(correo);
      this.bandejaDeEnvios.push(correo);
      
    }
    public CorreoRecibido (correo: Correo ) : void {

      this.agregarABandeja(correo);
      this.bandejaDeEntrada.push(correo);
      this.setEstadonotificacion(correo.getEmisor());

    }

    public getTodosLosCorreos () : Correo[] {
      return this.todosLosCorreos ;
    }

    public getBandejaDeEntrada(): Correo[] {

      return this.bandejaDeEntrada;

    }
    public getBandejaDeFavoritos(): Correo[] {

      return this.bandejaDeFavorito;

    }
    public agregarFavorito(correoFav: Correo): void {

      this.bandejaDeFavorito.push(correoFav)

    }
    public getBandejaDeEnvios() : Correo [] {

      return this.bandejaDeEnvios;

    }

    public mostrarCorreos(): string {
      let imprimir: string = "";
      for (const c of this.todosLosCorreos) {
        imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
      }
      return imprimir;
    }
    public mostrarCorreosEnviados(): string {
      let imprimir: string = "";
      for (const c of this.bandejaDeEnvios) {
        const destinatarios = Array.from(c.getPara()).join("-");
        imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${destinatarios}`;
      }
      return imprimir;
    }
    public mostrarCorreosRecividos(): string {
      let imprimir: string = "";
      for (const c of this.bandejaDeEntrada) {
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
  