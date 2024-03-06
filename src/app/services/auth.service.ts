import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { user } from "../model/user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiAuthRegister = environment.apiUrl + '/auth/signup';
    private apiAuthLogin = environment.apiUrl + '/auth/login';
    isLoggedIn = false;

    constructor(private http: HttpClient) { }

    register(userData: user): Observable<any> {
        return this.http.post<any>(this.apiAuthRegister, userData);
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiAuthLogin, { username, password });
    }

    isLogin() {
        this.isLoggedIn = true;
    }

    isLogout() {
        this.isLoggedIn = false;
    }
}
  
