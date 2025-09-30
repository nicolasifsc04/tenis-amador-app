import { Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard'; // Importa o Guarda de Rotas para a área administrativa

export const routes: Routes = [
  // ==========================================================
  // 1. ROTAS PÚBLICAS (TABS: Ranking, Calendário, Resultados)
  // ==========================================================
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  // 2. ROTA DE LOGIN (PÚBLICA)
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },

  // ==========================================================
  // 3. ROTAS ADMINISTRATIVAS (PROTEGIDAS)
  // ==========================================================
  {
    path: 'admin',
    // OBRIGATÓRIO: Aplica o Guarda de Rotas para esta rota e todas as filhas
    canActivate: [authGuard],
    children: [
      // Rota padrão após login
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/admin/dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      // Rota de Gestão de Torneios (Criação/Edição/Listagem)
      {
        path: 'torneios',
        loadComponent: () => import('./pages/admin/torneios-admin/torneios-admin.page').then(m => m.TorneiosAdminPage)
      },
      // Rota de Inserção de Resultados (RF009) - A ser criada em breve
      {
        path: 'resultados/novo',
        // TODO: Mudar o componente quando a página for criada
        loadComponent: () => import('./pages/admin/dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      // Redireciona a rota base /admin para o Dashboard
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

  // ==========================================================
  // 4. ROTA WILDCARD (REDIRECIONA QUALQUER COISA INVÁLIDA PARA A HOME)
  // ==========================================================
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
