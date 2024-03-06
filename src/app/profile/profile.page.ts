import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { user } from '../model/user.model';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonContent, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, ToastController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [ IonCard, IonCardContent, IonCardHeader, IonContent, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, CommonModule ],
})

export class ProfilePage implements OnInit {
  currentUser: user | null = null;

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {

  }


  logout(): void {
    console.log('Cerrando sesión...');
    this.authService.isLogout();
    this.router.navigate(['/']);
    this.showToast('Sesión finalizada', 'success', 2000);
  }

  async showToast(msg: string, color: string = 'primary', duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }
}


