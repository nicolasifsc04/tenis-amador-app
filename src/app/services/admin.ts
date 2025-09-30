import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private API_URL = 'http://localhost:3000/api/admin'; // Base para rotas protegidas

  constructor(private http: HttpClient) { }

  /**
   * GET /api/admin/torneios - Lista todos os torneios para o painel de gestão
   */
  getTorneios(): Observable<any> {
    // O AuthInterceptor adicionará o token JWT automaticamente
    return this.http.get(`${this.API_URL}/torneios`);
  }

  /**
   * POST /api/admin/torneios - Cria um novo torneio
   */
  createTorneio(torneioData: any): Observable<any> {
    // O AuthInterceptor adicionará o token JWT automaticamente
    return this.http.post(`${this.API_URL}/torneios`, torneioData);
  }

  // Você adicionará métodos como getJogadoresList(), addParticipante(), etc.
}
