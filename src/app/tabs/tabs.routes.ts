import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        // 1. Rota do Ranking
        path: 'ranking',
        // O caminho aponta para o arquivo .page.ts, e o .then() aponta para a CLASSE.
        loadComponent: () => import('../ranking/ranking.page').then(m => m.RankingPage)
      },
      {
        // 2. Rota do Calendário
        path: 'calendario',
        loadComponent: () => import('../calendario/calendario.page').then(m => m.CalendarioPage)
      },
      {
        // 3. Rota dos Resultados
        path: 'resultados',
        loadComponent: () => import('../resultados/resultados.page').then(m => m.ResultadosPage)
      },
      {
        // Define 'ranking' como a aba inicial
        path: '',
        redirectTo: '/tabs/ranking',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/ranking',
    pathMatch: 'full',
  },
];
