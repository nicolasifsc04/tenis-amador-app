import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

/**
 * Função de Guarda de Rota para proteger rotas administrativas.
 * Permite o acesso se o usuário estiver autenticado (tiver um token válido).
 */
export const authGuard: CanActivateFn = async (route, state) => {
  // 1. Injeta o serviço de autenticação e o roteador
  const authService = inject(AuthService);
  const router = inject(Router);

  // 2. Verifica o status de autenticação (se o token JWT existe no storage)
  const isAuthenticated = await authService.isAuthenticated();

  if (isAuthenticated) {
    // Se estiver autenticado, permite o acesso à rota
    return true;
  } else {
    // Se NÃO estiver autenticado, redireciona para a página de login
    console.warn("Tentativa de acesso não autorizado. Redirecionando para login.");

    // Redireciona para a página de login que você criou
    return router.parseUrl('/login');
  }
};
