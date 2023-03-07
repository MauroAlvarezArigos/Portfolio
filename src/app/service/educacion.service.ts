import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
    providedIn: 'root'
})
export class EducacionService {
    //URL = 'http://localhost:8080/educacion/';
    URL = 'https://portfoliowebbackend.rj.r.appspot.com/educacion/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Educacion[]> {
        return this.httpClient.get<Educacion[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
    }

    public save(edu: Educacion): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'create', edu);
    }

    public update(id: number, edu: Educacion): Observable<any> {
        return this.httpClient.put<any>(this.URL + `update/${id}`, edu);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}
