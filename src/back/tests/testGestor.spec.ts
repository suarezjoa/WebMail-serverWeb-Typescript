
import BandejaDeEnvios from '../bandejas/BandejaDeEnvios';
import { Usuario } from '../Usuario'; // suponiendo que la clase Usuario está definida en otro archivo
import  BandejaDeRecibidos from '../bandejas/BandejaDeRecibidos';
import { Correo } from '../Correo';


describe("CrearUsuarioYImprimir", () => {
  it("crea un usuario y lo imprime correctamente", () => {
    const usuario2 = new Usuario("val", "sorty", "ssa@gmail.com");
    expect(usuario2.imprimir()).toEqual("[Usuario] datos: val,sorty,ssa@gmail.com");
  });
});

test("CreaGestorDeUnContactoMasImprimir", () => {
  const usuario1 = new Usuario("joaquin", "suarez", "sj@gmail.com");

  const usuario2 = new Usuario("val", "sorty", "ssa@gmail.com");

  
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
      const usuario1 = new Usuario('joaquin', 'suarez', 'sj@gmail.com');
      const usuario2 = new Usuario('andres', 'briend', 'andresbriend@gmail.com');
  
      const correoPrueba = new Correo('mandarCoreo', 'prueba', usuario1.getEmail());
      const correoPrueba1 = new Correo('Viaje de vacaciones', 't7', usuario2.getEmail());
      correoPrueba.agregarPara(usuario1);
      correoPrueba1.agregarPara(usuario2);
      usuario1.enviarCorreo(correoPrueba);
      usuario2.enviarCorreo(correoPrueba1);
  
      expect(usuario1.mostrarCorreos()).toBe("A-mandarCoreo C-prueba E-sj@gmail.com");
      expect(usuario2.mostrarCorreos()).toBe("A-Viaje de vacaciones C-t7 E-andresbriend@gmail.com");
    });

});

