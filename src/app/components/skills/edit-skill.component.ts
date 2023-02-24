import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
    selector: 'app-edit-skill',
    templateUrl: './edit-skill.component.html',
    styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
    skill: Skills = null;
    nombre: string;
    constructor(private ss: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id'];
        this.ss.detail(id).subscribe(data => { this.skill = data; }, err => {
            alert("Error al intentar recuperar los datos del servidor."); 
            this.router.navigate(['']);
        })
    }

    onUpdate() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.skill.nombre = this.nombre;
        this.ss.update(id, this.skill).subscribe(data => {
            alert("Skill modificada con exito.");
            this.router.navigate(['']);
        }, err => {
            alert("Error al intentar modificar la Skill.");
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
