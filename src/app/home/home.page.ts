import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isDesktop(): boolean {
    // Detecta si el ancho de la ventana es mayor que 768px (tamaño típico de una tableta en orientación horizontal)
    return window.innerWidth > 768;
  }


  // Método para iniciar sesión
  login() {
    // Aquí iría la lógica para iniciar sesión
    console.log('Iniciando sesión...');
  }

  // Método para registrar un nuevo usuario
  register() {
    // Aquí iría la lógica para registrar un nuevo usuario
    console.log('Registrando usuario...');
  }



  /*
    // Método para iniciar sesión
    login(username: string, password: string) {
      this.authService.login(username, password).subscribe(
        () => {
          // Redireccionar al usuario después de iniciar sesión
          this.router.navigate(['/home']);
        },
        (error) => {
          // Manejar errores de autenticación
          console.error('Error al iniciar sesión:', error);
          // Mostrar mensaje de error al usuario
        }
      );
    }
    */
  
    /*
    // Método para registrar un nuevo usuario
    register(username: string, password: string) {
      this.authService.register(username, password).subscribe(
        () => {
          // Redireccionar al usuario después de registrar
          this.router.navigate(['/login']);
        },
        (error) => {
          // Manejar errores de registro
          console.error('Error al registrar:', error);
          // Mostrar mensaje de error al usuario
        }
      );
    }
  }
  */

}
