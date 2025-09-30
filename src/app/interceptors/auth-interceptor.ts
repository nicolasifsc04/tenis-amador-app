import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 1. Verifica se a URL é para a área de admin e se deve adicionar o token
    if (req.url.includes('/api/admin/')) {

      // Usa 'from' e 'switchMap' porque o getToken é assíncrono (Promise)
      return from(this.authService.getToken()).pipe(
        switchMap(token => {
          if (token) {
            // 2. Clona a requisição e adiciona o cabeçalho Authorization
            const cloned = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(cloned);
          }
          // Se não houver token, passa a requisição original (ela falhará no backend com 401)
          return next.handle(req);
        })
      );
    }

    // Se não for uma rota admin, continua normalmente
    return next.handle(req);
  }
}
