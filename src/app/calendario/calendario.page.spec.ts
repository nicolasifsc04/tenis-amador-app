import { ComponentFixture, TestBed } from '@angular/core/testing';
// Note que você tem que importar a classe com o nome correto: CalendarioPage
import { CalendarioPage } from './calendario.page';

// Use o nome da classe correta
describe('CalendarioPage', () => {
  let component: CalendarioPage;
  let fixture: ComponentFixture<CalendarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // OBRIGATÓRIO: Importar o componente Standalone
      imports: [CalendarioPage]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
