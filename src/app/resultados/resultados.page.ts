import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  templateUrl: 'resultados.page.html',
  styleUrls: ['resultados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ResultadosPage implements OnInit {
  // DECLARAÇÃO DAS VARIÁVEIS
  resultadosData: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  // Injeta o serviço
  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.loadResultados();
  }

  loadResultados() {
    this.isLoading = true;
    this.errorMessage = '';

    // Chama o endpoint /api/resultados
    this.dadosService.getResultados().subscribe({
      next: (data) => {
        this.resultadosData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Falha ao carregar o histórico de resultados.';
        console.error('Erro de API:', err);
        this.isLoading = false;
      }
    });
  }
}
