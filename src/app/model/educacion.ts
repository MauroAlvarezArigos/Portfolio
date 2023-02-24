export class Educacion {
    id?: number;
    nombre: string;
    descripcion: string;

    constructor(nombreE: string, descripcionE: string){
        this.nombre = nombreE;
        this.descripcion = descripcionE;
    }
}
