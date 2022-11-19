import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpersonajeComponent } from './crearpersonaje.component';

describe('CrearpersonajeComponent', () => {
  let component: CrearpersonajeComponent;
  let fixture: ComponentFixture<CrearpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
