import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
    selector: 'app-new-proyecto',
    templateUrl: './new-proyecto.component.html',
    styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
    nombre: string = '';
    descripcion: string = '';
    imagen: string;
    constructor(private ps: ProyectosService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const xp = new Proyectos(this.nombre, this.descripcion, this.imagen);
        this.ps.save(xp).subscribe(data => { 
            alert("Proyecto guardada con exito!"); 
            this.router.navigate(['']);
        }, err => {
            alert("El proyecto no pudo guardarse, por favor reintente mas tarde");
            this.router.navigate(['']);
        });
    }

    onFileSelected(event: any) {
        this.convertFile(event.target.files[0]).subscribe((base64: any) => {
            this.imagen = base64;
        });
    }

    convertFile(file: File): Observable<string> {
        const result = new ReplaySubject<string>(1);
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (event) => result.next(btoa(event.target.result.toString()));
        return result;
    }

}
