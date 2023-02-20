import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
    providedIn: 'root'
})
export class ExperienciaService {
    xpURL = 'http://localhost:8080/experiencia/'

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Experiencia[]> {
        return this.httpClient.get<Experiencia[]>(this.xpURL + 'lista');
    }

    public detail(id: number): Observable<Experiencia> {
        return this.httpClient.get<Experiencia>(this.xpURL + `detail/${id}`);
    }

    public save(xp: Experiencia): Observable<any> {
        return this.httpClient.post<any>(this.xpURL + 'create', xp);
    }

    public update(id: number, xp: Experiencia): Observable<any> {
        return this.httpClient.put<any>(this.xpURL + `update/${id}`, xp);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.xpURL + `delete/${id}`);
    }
}
