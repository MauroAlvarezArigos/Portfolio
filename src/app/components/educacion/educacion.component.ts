import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    edu: Educacion[] = [];

    constructor(private edS: EducacionService, private tokenService: TokenService) { }
    isLogged = false;
    
    ngOnInit(): void {
        this.cargarEducacion();
        if(this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarEducacion(): void {
        this.edS.lista().subscribe(data => { this.edu = data;});
    }

    delete(id?: number): void {
        if(id != undefined) {
            this.edS.delete(id).subscribe(
                data => { 
                    alert("Experiencia eliminada con exito");
                    this.cargarEducacion(); 
                }, err => { 
                    alert("No se pudo eliminar la educacion"); 
                });
        }
    }

}
