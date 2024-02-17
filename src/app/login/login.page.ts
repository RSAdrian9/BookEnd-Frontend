import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) { }

  // Método para cerrar la vista actual e ir a otra
  closeView() {
    this.router.navigateByUrl('/tabs/home');
  }

  login() {
    // Aquí iría la lógica para iniciar sesión
    console.log('Iniciando sesión...');
  }
}
