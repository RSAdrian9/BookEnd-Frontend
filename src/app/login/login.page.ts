import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  
  username: string = ''; // Inicialización en la declaración de la clase
  password: string = ''; // Inicialización en la declaración de la clase 
  /*
  username: string = '';
  password: string = ''; */

  constructor(private router: Router, private userService: UserService, private toastController: ToastController, private authService: AuthService) { }

  /*
  async login() {
    const username = this.username;
    const password = this.password;

    try {
      await this.authService.login(username, password).toPromise();
      console.log('Sesión iniciada');
      // Mostrar un mensaje de toast con el mensaje de éxito
      this.showToast('Inicio de sesión correctamente', 'success');
      // Redirigir a la página principal después de iniciar sesión
      this.router.navigateByUrl('/tabs/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Mostrar un mensaje de toast con el error
      this.showToast('Error al iniciar sesión', 'danger');
    }
  }
  */



  login() {
    const username = this.username; // Obtener el nombre de usuario desde el formulario
    const password = this.password; // Obtener la contraseña desde el formulario

    this.userService.getUsers().subscribe(users => {
      const user = users.find(u => u.userName === username && u.password === password);
      if (user) {
        // Usuario autenticado, redirigir a otra página
        console.log('Usuario autenticado:', user);
        this.showToast('Inicio de sesión correctamente', 'success');
        this.router.navigateByUrl('/tabs/home');
      } else {
        // Usuario no encontrado o contraseña incorrecta
        console.log('Nombre de usuario o contraseña incorrectos');
        this.showToast('Nombre de usuario o contraseña incorrectos', 'danger');
      }
    }, error => {
      // Manejo de errores al obtener usuarios
      console.error('Error al obtener usuarios:', error);
      this.showToast('Error al obtener usuarios', 'danger');
    });
  }


    // Método para mostrar un mensaje de toast en la interfaz de usuario
    async showToast(msg: string, color: string = 'primary', duration: number = 2000): Promise<void> {
      const toast = await this.toastController.create({
        message: msg,
        duration: duration,
        color: color
      });
      toast.present();
    }

      // Método para cerrar la vista actual e ir a otra
  closeView() {
    this.router.navigateByUrl('/tabs/home');
  }

  // Método para redirigir a la página de registro
  registerPage() {
    this.router.navigate(['/register']);
  }
}
