import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
    selector: 'app-new-experiencia',
    templateUrl: './new-experiencia.component.html',
    styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
    nombreE: string = '';
    descripcionE: string = '';

    constructor(private xpService: ExperienciaService,private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const xp = new Experiencia(this.nombreE, this.descripcionE);
        this.xpService.save(xp).subscribe(data => { 
            alert("Experiencia guardada con exito!"); 
            this.router.navigate(['']);
        }, err => {
            alert("La experiencia no pudo guardarse, por favor reintente mas tarde");
            this.router.navigate(['']);
        });
    }

}
