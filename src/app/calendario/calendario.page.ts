import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CalendarioPage implements OnInit {
  // DECLARAÇÃO DAS VARIÁVEIS
  calendarioData: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  // Injeta o serviço
  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.loadCalendario();
  }

  loadCalendario() {
    this.isLoading = true;
    this.errorMessage = '';

    // Chama o endpoint /api/calendario
    this.dadosService.getCalendario().subscribe({
      next: (data) => {
        this.calendarioData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Falha ao carregar o calendário de torneios.';
        console.error('Erro de API:', err);
        this.isLoading = false;
      }
    });
  }
}
