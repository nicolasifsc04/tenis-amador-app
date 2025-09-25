import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-resultados', // Corrigido
  templateUrl: 'resultados.page.html', // Corrigido
  styleUrls: ['resultados.page.scss'], // Corrigido
  standalone: true,
  imports: [IonicModule]
})
export class ResultadosPage { // Corrigido
  constructor() {}
}
