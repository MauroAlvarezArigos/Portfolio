import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //authURL = 'http://localhost:8080/auth/';
    
    URL = 'https://portfoliowebbackend.rj.r.appspot.com/auth/';

    constructor(private httpClient: HttpClient) { }

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario): Observable<any> {
        return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
    }

}
