export class Skills {
    id?: number;
    nombre: string;
    porcentaje: number;

    constructor(nombreE: string, porcentaje: number){
        this.nombre = nombreE;
        this.porcentaje = porcentaje;
    }
}
