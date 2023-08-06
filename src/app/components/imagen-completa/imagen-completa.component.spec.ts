import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenCompletaComponent } from './imagen-completa.component';

describe('ImagenCompletaComponent', () => {
  let component: ImagenCompletaComponent;
  let fixture: ComponentFixture<ImagenCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenCompletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
