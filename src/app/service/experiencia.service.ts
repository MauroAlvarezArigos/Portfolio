import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
    providedIn: 'root'
})
export class ExperienciaService {
    //URL = 'http://localhost:8080/experiencia/'
    URL = 'https://portfoliowebbackend.rj.r.appspot.com/experiencia/'

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Experiencia[]> {
        return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Experiencia> {
        return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
    }

    public save(xp: Experiencia): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'create', xp);
    }

    public update(id: number, xp: Experiencia): Observable<any> {
        return this.httpClient.put<any>(this.URL + `update/${id}`, xp);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}
