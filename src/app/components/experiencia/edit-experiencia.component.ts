import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
    selector: 'app-edit-experiencia',
    templateUrl: './edit-experiencia.component.html',
    styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
    xp: Experiencia = null;

    constructor(private servicio: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.servicio.detail(id).subscribe(data => {
            this.xp = data;
        }, err => {
            alert("Error al intentar modificar la experiencia (OnInit)");
            this.router.navigate(['']);
        });
    }

    onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.servicio.update(id, this.xp).subscribe(data => {
            alert("Experiencia modificada con exito");
            this.router.navigate(['']);
        }, err => {
            alert("Error al intentar modificar la experiencia (OnUpdate)");
            this.router.navigate(['']);
        })
    }

}
