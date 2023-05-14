
import { Usuario } from '../Usuario'; // suponiendo que la clase Usuario está definida en otro archivo
import { Correo } from '../Correo/Correo';
import {GestorUsuario} from '../GestorUsuarios';


describe("CrearUsuarioYImprimir", () => {
  it("crea un usuario y lo imprime correctamente", () => {
    const usuario2 = new Usuario("val", "sorty", "ssa@gmail.com","algo");
    expect(usuario2.imprimir()).toEqual("[Usuario] datos: val,sorty,ssa@gmail.com");
  });
});

test("CreaGestorDeUnContactoMasImprimir", () => {
  const usuario1 = new Usuario("joaquin", "suarez", "sj@gmail.com","algo");

  const usuario2 = new Usuario("val", "sorty", "ssa@gmail.com","algo");

  
  //expect(contactosUsuario1.imprimir()).toEqual("[Usuario] datos: val,sorty,ssa@gmail.com");

  //expect(contactosUsuario1.datosDeUsuario("ssa@gmail.com")).toEqual("sorty,val,ssa@gmail.com");
});
/*describe('ManejadorDeBandejas', () => {
  it('debería devolver la misma instancia cada vez que se llame al método getInstance', () => {
    const instancia1 = ManejadorDeBandejas.obtenerInstancia();
    const instancia2 = ManejadorDeBandejas.obtenerInstancia();

    expect(instancia1).toBe(instancia2);
  });
});
describe('pruebaEnviarMasDeUnCorreo_usuario1_A_usuario2', () => {
  it('debería enviar correctamente dos correos de usuario1 a usuario2', () => {
    const usuario1 = new Usuario('joaquin', 'suarez', 'sj@gmail.com');
    const usuario2 = new Usuario('andres', 'briend', 'andresbriend@gmail.com');
    expect(usuario1.manejador).toBe(usuario2.manejador);
  });
});*/

  describe('pruebaEnviarMasDeUnCorreo_usuario1_A_usuario2', () => {
    it('debería enviar correctamente dos correos de usuario1 a usuario2', () => {

      const gestorUsu = new GestorUsuario();
      const correoAenviar = new Correo("asunto","Contenido","correoCuenta1@algo.com");

      correoAenviar.agregarPara("correoCuenta2@algo.com");

      gestorUsu.CrearCuenta("correoCuenta1@algo.com","cuenta1","NombreC1","ApellidoC1");
      gestorUsu.CrearCuenta("correoCuenta2@algo.com","cuenta2","NombreC2","ApellidoC2");

      gestorUsu.enviarCorreo(correoAenviar)
 
      let cuentas = gestorUsu.getManejador()
      let cuenta1 = cuentas.get("correoCuenta1@algo.com")

      expect(cuenta1?.bandeja.mostrarCorreosEnviados()).toBe("A-asunto C-Contenido E-correoCuenta2@algo.com");
      expect(gestorUsu.getManejador().get("correoCuenta2@algo.com")?.bandeja.mostrarCorreosRecividos()).toBe("A-asunto C-Contenido E-correoCuenta1@algo.com");
    });
  });
  describe("GestorUsuario", () => {
    it("notifica a los usuarios cuando reciben un correo", () => {
      // Creamos un gestor de usuarios
      const gestor = new GestorUsuario();

      // Creamos dos usuarios y los agregamos al gestor
      gestor.CrearCuenta("correoCuenta1@algo.com","cuenta1","NombreC1","ApellidoC1");
      gestor.CrearCuenta("correoCuenta2@algo.com","cuenta2","NombreC2","ApellidoC2");
  
      // Los usuarios deberían tener bandejas de entrada vacías
      expect(gestor.getManejador().get("correoCuenta1@algo.com")?.bandeja.getTodosLosCorreos().length).toEqual(0);
  
      // Enviamos un correo a ambos usuarios
      const correoAenviar = new Correo("asunto","Contenido","correoCuenta1@algo.com");

      correoAenviar.agregarPara("correoCuenta2@algo.com");

      gestor.enviarCorreo(correoAenviar);
  
      // Los usuarios deberían haber recibido el correo en su bandeja de entrada
      expect(gestor.getManejador().get("correoCuenta2@algo.com")?.update()).toEqual("Nuevo correo de correoCuenta1@algo.com");
    });
  });