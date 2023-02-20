import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
    selector: 'app-new-educacion',
    templateUrl: './new-educacion.component.html',
    styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
    nombreE: string = '';
    descripcionE: string = '';

    constructor(private eduService: EducacionService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const edu = new Educacion(this.nombreE, this.descripcionE);
        this.eduService.save(edu).subscribe(data => {
            alert("Educacion guardada con exito!");
            this.router.navigate(['']);
        }, err => {
            alert("La educacion no pudo guardarse, por favor reintente mas tarde");
            this.router.navigate(['']);
        });
    }
}