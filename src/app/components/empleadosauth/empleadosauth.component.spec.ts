import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosauthComponent } from './empleadosauth.component';

describe('EmpleadosauthComponent', () => {
  let component: EmpleadosauthComponent;
  let fixture: ComponentFixture<EmpleadosauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosauthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
