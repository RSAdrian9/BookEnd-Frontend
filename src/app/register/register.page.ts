import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterPage {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      biography: [''] // Agregar validadores según sea necesario
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const userData: user = {
        id: null, // O cualquier valor válido para el id, dependiendo de cómo lo maneje el backend
        userName: this.registerForm.value.username,
        password: this.registerForm.value.password,
        biography: this.registerForm.value.biography
      };

      this.userService.createUser(userData)
        .subscribe(
          (response: any) => {
            if (response) {
              this.showToast('Registro exitoso', 'success', 2000);
              this.router.navigate(['/']);
            } else {
              this.showToast('Error en el registro', 'danger', 2000);
            }
          },
          (error: any) => {
            console.error('Error en el registro:', error);
            this.showToast('Error en el registro', 'danger', 2000);
          }
        );
    } else {
      this.showToast('Formulario inválido', 'danger');
    }
  }
  
  // Método para mostrar un mensaje de toast en la interfaz de usuario (en caso de que no se haya podido registrar el usuario)
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

  /*
// En el registro, crea un objeto newUser sin el id, latitude, longitude e imageProfile
register() {
  if (this.password !== this.confirmPassword) {
    console.log('Las contraseñas no coinciden');
    return;
  }

  const newUser: user = {
    userName: this.username,
    password: this.password,
    biography: this.biography // Opcionalmente, incluye la biografía si se proporciona
    ,
    id: undefined
  };

  // Llama al servicio de usuario para registrar al nuevo usuario
  this.userService.createUser(newUser).subscribe(
    response => {
      console.log('Usuario registrado con éxito:', response);
      // Redirige al usuario a la página de inicio de sesión u otra página
      this.router.navigateByUrl('/');
    },
    error => {
      console.error('Error al registrar usuario:', error);
      // Maneja el error adecuadamente, muestra un mensaje al usuario, etc.
    }
  );
}
*/

  loginPage() {
    this.router.navigate(['/']);
  }
}
