import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.page.html',
  styleUrls: ['ranking.page.scss'],
  standalone: true,
  // OBRIGATÓRIO: Importa o CommonModule para *ngIf, *ngFor e IonicModule para os componentes UI
  imports: [IonicModule, CommonModule]
})
export class RankingPage implements OnInit {
  // DECLARAÇÃO DAS VARIÁVEIS (Resolve o erro "Property '...' does not exist")
  rankingData: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  // Injeta o serviço
  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.loadRanking();
  }

  loadRanking() {
    this.isLoading = true;
    this.errorMessage = '';

    // Chama o endpoint /api/ranking
    this.dadosService.getRanking().subscribe({
      next: (data) => {
        this.rankingData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Falha ao carregar o ranking. Verifique a API (porta 3000).';
        console.error('Erro de API:', err);
        this.isLoading = false;
      }
    });
  }
}
