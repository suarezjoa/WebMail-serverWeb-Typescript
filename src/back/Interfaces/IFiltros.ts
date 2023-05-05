import { Observable  } from 'rxjs';

import { Correo } from '../Correo';
import { Usuario } from '../Usuario';

export interface IFiltros {

  filtroPorAsunto(asunto: string): Observable <Correo[]>;

  filtroPorContenido(contenido: string): Observable <Correo[]>;

  filtroPorEmisor(emisor: string): Observable <Correo[]>;

}