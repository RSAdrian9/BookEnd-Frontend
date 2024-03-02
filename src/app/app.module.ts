import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega HttpClientModule a las importaciones
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
