import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Necessário para requisições HTTP
import { Observable } from 'rxjs'; // Necessário para lidar com o fluxo de dados

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  // CONFIRME que a URL do seu Backend (Express/Node.js) está correta (porta 3000)
  private API_URL = 'http://localhost:3000/api';

  // Injetamos o HttpClient no construtor
  constructor(private http: HttpClient) { }

  // Método para buscar o Ranking
  getRanking(): Observable<any> {
    return this.http.get(`${this.API_URL}/ranking`);
  }

  // Método para buscar o Calendário
  getCalendario(): Observable<any> {
    return this.http.get(`${this.API_URL}/calendario`);
  }

  // Método para buscar os Resultados
  getResultados(): Observable<any> {
    return this.http.get(`${this.API_URL}/resultados`);
  }
}
