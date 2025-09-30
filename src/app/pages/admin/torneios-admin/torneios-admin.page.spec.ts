import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneiosAdminPage } from './torneios-admin.page';

describe('TorneiosAdminPage', () => {
  let component: TorneiosAdminPage;
  let fixture: ComponentFixture<TorneiosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneiosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
