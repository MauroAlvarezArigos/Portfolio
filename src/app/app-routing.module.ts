import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nueva-experiencia', component: NewExperienciaComponent },
    { path: 'editar-experiencia/:id', component: EditExperienciaComponent },
    { path: 'nueva-educacion', component: NewEducacionComponent },
    { path: 'editar-educacion/:id', component: EditEducacionComponent },
    { path: 'nueva-skill', component: NewSkillComponent },
    { path: 'editar-skill/:id', component: EditSkillComponent },
    { path: 'editar-perfil/:id', component: EditAboutComponent },
    { path: 'nuevo-proyecto', component: NewProyectoComponent },
    { path: 'editar-proyecto/:id', component: EditProyectoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
