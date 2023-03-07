import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
    providedIn: 'root'
})

export class PersonaService {
    //URL = 'http://localhost:8080/personas/';
    URL = 'https://portfoliowebbackend.rj.r.appspot.com/personas/';

    constructor(private http: HttpClient) { }

    public getPerfil(): Observable<Persona> {
        return this.http.get<Persona>(this.URL + 'detail/1');
    }

    public lista(): Observable<Persona[]> {
        return this.http.get<Persona[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Persona> {
        return this.http.get<Persona>(this.URL + `detail/${id}`);
    }

    
    public update(id: number, persona: Persona): Observable<any> {
        return this.http.put<any>(this.URL + `update/${id}`, persona);
    }

    /*
    public save(edu: Educacion): Observable<any> {
        return this.httpClient.post<any>(this.eduURL + 'create', edu);
    }
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
    }
    */
}
