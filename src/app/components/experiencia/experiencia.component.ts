import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-experiencia',
    templateUrl: './experiencia.component.html',
    styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
    xp: Experiencia[] = [];

    constructor(private xpService: ExperienciaService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarExperiencia();
        if(this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarExperiencia(): void {
        this.xpService.lista().subscribe(data => {this.xp = data;});
    }

    delete(id?: number): void {
        if(id != undefined) {
            this.xpService.delete(id).subscribe(data => {
                alert("Experiencia eliminada con exito");
                this.cargarExperiencia();
            }, err => {
                alert("No se pudo eliminar la Experiencia");
            });
        }
    }
}