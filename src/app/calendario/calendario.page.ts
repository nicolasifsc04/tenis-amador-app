import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calendario', // Corrigido
  templateUrl: 'calendario.page.html', // Corrigido
  styleUrls: ['calendario.page.scss'], // Corrigido
  standalone: true,
  imports: [IonicModule]
})
export class CalendarioPage { // Corrigido
  constructor() {}
}
