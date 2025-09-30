import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin'; // Ajuste o caminho

@Component({
  selector: 'app-torneios-admin',
  templateUrl: './torneios-admin.page.html',
  styleUrls: ['./torneios-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TorneiosAdminPage implements OnInit {
  torneios: any[] = [];
  novoTorneio: any = {};
  isLoading: boolean = true;
  isCreating: boolean = false;
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadTorneios();
  }

  loadTorneios() {
    this.isLoading = true;
    this.adminService.getTorneios().subscribe({
      next: (data) => {
        this.torneios = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Falha ao carregar torneios. Verifique o login ou API.';
        this.isLoading = false;
        console.error('Erro de Carregamento:', err);
      }
    });
  }

  onSubmitCreateTorneio() {
    this.isCreating = true;
    // O backend exige: nome, data_inicio, local. O resto é opcional.
    this.adminService.createTorneio(this.novoTorneio).subscribe({
      next: (res) => {
        alert(res.message);
        this.isCreating = false;
        this.novoTorneio = {}; // Limpa o formulário
        this.loadTorneios(); // Recarrega a lista
      },
      error: (err) => {
        this.errorMessage = 'Erro ao criar torneio.';
        this.isCreating = false;
        console.error('Erro de Criação:', err);
      }
    });
  }
}
