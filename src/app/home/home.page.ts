import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem,IonRow ,IonCol ,IonGrid ,IonButton ,IonIcon  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons' ;
import { trashBin } from 'ionicons/icons' ;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem ,IonRow ,IonCol ,IonGrid ,IonButton ,IonIcon ],
})
export class HomePage {
  constructor() {
    addIcons({ trashBin });
  }
}
