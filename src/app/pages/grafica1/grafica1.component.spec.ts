import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica1Component } from './grafica1.component';

describe('Grafica1Component', () => {
  let component: Grafica1Component;
  let fixture: ComponentFixture<Grafica1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grafica1Component]
    });
    fixture = TestBed.createComponent(Grafica1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
