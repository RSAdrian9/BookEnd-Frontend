import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) { }

  // Método para cerrar la vista actual e ir a otra
  closeView() {
    this.router.navigateByUrl('/tabs/home');
  }

  loginPage() {
    this.router.navigate(['/']);
  }
}
