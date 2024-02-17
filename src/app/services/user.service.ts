import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../model/user.model";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
      private apiUrl = 'http://localhost:8080/users';
  
  
    constructor(private http: HttpClient) { }
  
    getUsers(): Observable<user[]> {
      return this.http.get<user[]>(this.apiUrl);
    }
  
    createUser(user: user): Observable<user> {
      return this.http.post<user>(this.apiUrl, user);
    }
  
    updateUser(user: user): Observable<user> {
      return this.http.put<user>(`${this.apiUrl}/${user.id}`, user);
    }
  
    deleteUser(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    
  }