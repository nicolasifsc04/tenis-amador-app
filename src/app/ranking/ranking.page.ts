import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // <--- OBRIGATÓRIO: Importa o módulo do Ionic

@Component({
  selector: 'app-ranking', // Garante que o selector está correto
  templateUrl: 'ranking.page.html',
  styleUrls: ['ranking.page.scss'],
  standalone: true,
  imports: [IonicModule] // <--- IMPORTAÇÃO CORRETA: Adiciona o módulo ao componente standalone
})
export class RankingPage { // Garante que a classe está correta
  constructor() {}
}
