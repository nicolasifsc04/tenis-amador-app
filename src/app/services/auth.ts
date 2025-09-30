import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// O Ionic usa Storage para salvar dados localmente (o token JWT)
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3000/api';
  private TOKEN_KEY = 'jwt-token';

  // Injeta o cliente HTTP para comunicação com o backend
  constructor(private http: HttpClient) { }

  /**
   * Envia as credenciais para o endpoint /api/login do backend.
   */
  login(email: string, senha: string): Observable<any> {
    // Faz a requisição POST para o seu backend
    return this.http.post(`${this.API_URL}/login`, { email, senha }).pipe(
      tap((res: any) => {
        // Se o login for bem-sucedido, salva o token no storage
        if (res.token) {
          this.saveToken(res.token);
        }
      })
    );
  }

  /**
   * Remove o token e desloga o usuário.
   */
  async logout() {
    await Preferences.remove({ key: this.TOKEN_KEY });
    // Opcional: Redirecionar para a página pública principal
    // Exemplo: this.router.navigateByUrl('/tabs/ranking', { replaceUrl: true });
  }

  /**
   * Salva o Token JWT no armazenamento local (Preferences)
   */
  async saveToken(token: string) {
    await Preferences.set({ key: this.TOKEN_KEY, value: token });
  }

  /**
   * Verifica se o usuário está logado (se o token existe)
   */
  async isAuthenticated(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.TOKEN_KEY });
    // Nota: Em produção, você também verificaria a validade do token (expiração)
    return !!value;
  }

  /**
   * Retorna o Token JWT (necessário para o Header de requisições de Admin)
   */
  async getToken(): Promise<string | null> {
    const { value } = await Preferences.get({ key: this.TOKEN_KEY });
    return value;
  }
}
