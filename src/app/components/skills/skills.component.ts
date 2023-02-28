import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    skills: Skills[] = [];

    constructor(private ss: SkillsService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.cargarSkills();
        if(this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    cargarSkills(): void {
        this.ss.lista().subscribe(data => {this.skills = data;});
    }

    delete(id?: number): void {
        if(id != undefined) {
            this.ss.delete(id).subscribe(data => {
                alert("Skill eliminada con exito");
                this.cargarSkills();
            }, err => {
                alert("No se pudo eliminar la Skill");
            });
        }
    }
}
