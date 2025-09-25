import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingPage } from './ranking.page'; // <--- CORRIGIDO: Importa a classe correta

describe('RankingPage', () => { // <--- CORRIGIDO: Usa o nome correto
  let component: RankingPage; // <--- CORRIGIDO
  let fixture: ComponentFixture<RankingPage>; // <--- CORRIGIDO

  beforeEach(async () => {
    // Para resolver o erro 'ion-header' no teste, você também precisa adicionar as dependências de teste
    await TestBed.configureTestingModule({
      imports: [RankingPage], // <--- OBRIGATÓRIO PARA STANDALONE TESTES
    }).compileComponents();

    fixture = TestBed.createComponent(RankingPage); // <--- CORRIGIDO
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
