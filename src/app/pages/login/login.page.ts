import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // OBRIGATÓRIO: Para usar ngModel nos inputs

import { AuthService } from '../../services/auth';
import { Router } from '@angular/router'; // Para redirecionar após o login

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  // Adiciona FormsModule para inputs e CommonModule/IonicModule
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email!: string; // O ! indica que a variável será inicializada em outro lugar (ngOnInit ou formulário)
  senha!: string;
  errorMessage: string = '';
  isLoggingIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Verifica se já está logado para evitar mostrar a tela de login
    this.checkLoginStatus();
  }

  async checkLoginStatus() {
    if (await this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/admin/dashboard', { replaceUrl: true });
    }
  }

  onSubmitLogin() {
    if (!this.email || !this.senha) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    this.isLoggingIn = true;
    this.errorMessage = '';

    this.authService.login(this.email, this.senha).subscribe({
      next: (response) => {
        this.isLoggingIn = false;
        // Redireciona para a área de gestão (que criaremos em breve)
        this.router.navigateByUrl('/admin/dashboard', { replaceUrl: true });
      },
      error: (err) => {
        this.isLoggingIn = false;
        // Trata erros 401 (Credenciais Inválidas) ou falha de conexão
        if (err.status === 401) {
          this.errorMessage = 'E-mail ou senha inválidos.';
        } else {
          this.errorMessage = 'Falha na conexão com o servidor. Tente novamente.';
        }
        console.error('Erro de Login:', err);
      }
    });
  }
}
