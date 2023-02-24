import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
    selector: 'app-new-skill',
    templateUrl: './new-skill.component.html',
    styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
    nombre: string;
    porcentaje: number;

    constructor(private ss: SkillsService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const skill = new Skills(this.nombre, this.porcentaje);
        this.ss.save(skill).subscribe(data => { 
            alert("Skill guardada con exito!"); 
            this.router.navigate(['']);
        }, err => {
            alert("La Skill no pudo guardarse, por favor reintente mas tarde");
            this.router.navigate(['']);
        });
    }

    onFileSelected(event: any) {
        this.convertFile(event.target.files[0]).subscribe((base64: any) => {
            this.nombre = base64;
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
