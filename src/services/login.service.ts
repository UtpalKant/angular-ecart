import { Token } from "src/model/token";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    loginUser(userName: string, password: string): Observable<Token | string> {
        let loginUrl = 'https://localhost:44368/api/account/login';
        const body = new FormData();
        body.append('userName', userName);
        body.append('password', password);
        return this.http.post<Token | string>(loginUrl, body);
    }
}