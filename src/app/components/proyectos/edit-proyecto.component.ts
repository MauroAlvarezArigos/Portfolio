import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {

  proyecto: Proyectos = null;
  nuevaimg: string = null;
  constructor(private ps: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.ps.detail(id).subscribe(data => { this.proyecto = data; }, err => {
          alert("Error al intentar recuperar los datos del servidor.");
          this.router.navigate(['']);
      })
  }

  onUpdate() {
      const id = this.activatedRoute.snapshot.params['id'];
      if (this.nuevaimg != null) this.proyecto.imagen = this.nuevaimg;
      this.ps.update(id, this.proyecto).subscribe(data => {
          alert("Proyecto modificado con exito.");
          this.router.navigate(['']);
      }, err => {
          alert("Error al intentar modificar el Proyecto.");
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
