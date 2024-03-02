import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { book } from "../model/book.model";

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
  
      private apiUrl = 'http://localhost:8080/books';
  
  
    constructor(private http: HttpClient) { }
  
    getBooks(): Observable<book[]> {
      return this.http.get<book[]>(this.apiUrl);
    }
  
    createBook(book: book): Observable<book> {
      return this.http.post<book>(this.apiUrl, book);
    }
  
    updateBook(book: book): Observable<book> {
      return this.http.put<book>(`${this.apiUrl}/${book.isbn}`, book);
    }
  
    deleteBook(isbn: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${isbn}`);
    }
    
  }