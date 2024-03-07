import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
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

    private currentUserSubject: BehaviorSubject<user | null>;
    public currentUser: Observable<user | null>;
  
    constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<user | null>(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  
    public get currentUserValue(): user | null {
      return this.currentUserSubject.value;
    }
  
    register(userData: user): Observable<any> {
      return this.http.post<any>(this.apiAuthRegister, userData);
    }
  
    login(username: string, password: string): Observable<any> {
      return this.http.post<any>(this.apiAuthLogin, { username, password })
        .pipe(
          map(user => {
            // Almacenar los datos del usuario autenticado en el servicio
            this.currentUserSubject.next(user);
            return user;
          })
        );
    }
  
    logout() {
      // Eliminar los datos del usuario autenticado al cerrar sesión
      this.currentUserSubject.next(null);
    }

    isLogin() {
        this.isLoggedIn = true;
    }

    isLogout() {
        this.isLoggedIn = false;
    }
}
  
