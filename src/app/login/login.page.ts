import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  username: string = ''; // Inicialización en la declaración de la clase
  password: string = ''; // Inicialización en la declaración de la clase

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  // Método para cerrar la vista actual e ir a otra
  closeView() {
    this.router.navigateByUrl('/tabs/home');
  }

  login() {
    const username = 'username'; // Obtener el nombre de usuario desde el formulario
    const password = 'password'; // Obtener la contraseña desde el formulario
  
    this.userService.getUsers().subscribe(users => {
      const user = users.find(u => u.userName === username && u.password === password);
      if (user) {
        // Usuario autenticado, redirigir a otra página
        console.log('Usuario autenticado:', user);
        this.router.navigateByUrl('/dashboard');
      } else {
        // Usuario no encontrado o contraseña incorrecta
        console.log('Nombre de usuario o contraseña incorrectos');
      }
    });
  }

  // Método para redirigir a la página de registro
  registerPage() {
    this.router.navigate(['/register']);
  }
}
