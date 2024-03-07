import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookService } from '../services/book.service';
import { book } from '../model/book.model';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddBookPage {
  newBook: book = {
    isbn: '',
    title: '',
    author: '',
    sinopsis: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private bookService: BookService) { }

  sellBook() {
    // Aquí puedes acceder a this.newBook para obtener los datos del libro a vender
    console.log('Datos del libro a vender:', this.newBook);
    // Llama al servicio BookService para procesar los datos del nuevo libro
    this.bookService.createBook(this.newBook).subscribe(
      response => {
        console.log('Libro vendido exitosamente:', response);
        // Aquí puedes realizar cualquier otra acción después de vender el libro (por ejemplo, redirigir a otra página)
      },
      error => {
        console.error('Error al vender el libro:', error);
      }
    );
  }
}
