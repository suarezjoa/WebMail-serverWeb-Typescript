
export class Contacto {
    protected nombre: string;
    protected apellido: string;
    protected email: string;
    protected relacion: string;

    constructor(nombre: string, apellido: string, Email: string, relacion: string) {
        this.nombre = nombre;
        this.relacion = relacion;
        this.apellido = apellido;
        this.email = Email;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
    public getRelacion(): string {
        return this.relacion;
    }

    public setRelacion(relacion: string): void {
        this.relacion = relacion;
    }

}