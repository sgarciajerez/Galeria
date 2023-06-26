import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPrincipalComponent } from './galeria-principal.component';

describe('GaleriaPrincipalComponent', () => {
  let component: GaleriaPrincipalComponent;
  let fixture: ComponentFixture<GaleriaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
