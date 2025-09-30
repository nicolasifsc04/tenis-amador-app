import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // <--- OBRIGATÓRIO: Permite testar o HttpClient
import { DadosService } from './dados'; // Renomeado para dados.service

describe('DadosService', () => {
  let service: DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Adicione o módulo de teste HTTP aqui!
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Você pode adicionar um teste simples aqui para garantir que o método existe (Opcional, mas recomendado):
  it('should have a getRanking method', () => {
     expect(service.getRanking).toBeTruthy();
  });
});
