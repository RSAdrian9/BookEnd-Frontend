import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  
})
export class AppModule {}
