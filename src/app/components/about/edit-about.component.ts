import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  persona: Persona = null;
  nuevaimg: string = null;
  constructor(private ps: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.ps.detail(id).subscribe(data => { this.persona = data; }, err => {
          alert("Error al intentar recuperar los datos del servidor."); 
          this.router.navigate(['']);
      })
  }

  onUpdate() {
      const id = this.activatedRoute.snapshot.params['id'];
      if(this.nuevaimg != null) this.persona.img = this.nuevaimg;
      this.ps.update(id, this.persona).subscribe(data => {
          alert("Perfil modificado con exito.");
          this.router.navigate(['']);
      }, err => {
          alert("Error al intentar modificar el Perfil.");
          this.router.navigate(['']);
      });
  }

  onFileSelected(event: any) {
      this.convertFile(event.target.files[0]).subscribe((base64: any) => {
          this.nuevaimg = base64;
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
