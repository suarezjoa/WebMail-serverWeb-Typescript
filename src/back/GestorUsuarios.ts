    import { Usuario } from "./Usuario";
    import { Correo } from "./Correo/Correo";

    export class GestorUsuario {

        private static instance: GestorUsuario; // aplicacamos singleton para que solo exita un solo manejador

        private manejador: Map<string, Usuario> = new Map<string, Usuario>

        // Esta funcion hara que solo nos devuelva un manejador para la aplicación de singleton
        public static getInstance(): GestorUsuario { 
            if (!GestorUsuario.instance) {
                GestorUsuario.instance = new GestorUsuario();
            }
            return GestorUsuario.instance;
        }

        public CrearCuenta(email: string, contrasenia: string, nombre: string, apellido: string,){
            var crearCuenta = new Usuario(nombre,apellido,email,contrasenia);
            this.manejador.set(email,crearCuenta);
        }

        public EliminarCuenta(email: string, contrasenia: string, nombre: string, apellido: string,){//al solicitar todos los campos reducimos el posible riesgo de que el usuario que solicita eliminar la cuenta no sea el verdadero dueño de la cuenta.
            this.manejador.delete(email);
        }

        public enviarCorreo(Nuevocorreo: Correo): void {
            const usuariosDestinatarios = Nuevocorreo.getPara();
            
            for (const usuario of usuariosDestinatarios) {
                const usuReceptorAgregar = this.manejador.get(usuario);
                usuReceptorAgregar?.bandeja.CorreoRecibido(Nuevocorreo);
            }
            const usuarioRemitente = this.manejador.get(Nuevocorreo.getEmisor());
            usuarioRemitente?.bandeja.CorreoEnviado(Nuevocorreo);
        }

        public getManejador(): Map<string,Usuario> {
            return this.manejador
        }

    }









