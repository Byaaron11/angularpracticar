import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhospitalComponent } from './editarhospital.component';

describe('EditarhospitalComponent', () => {
  let component: EditarhospitalComponent;
  let fixture: ComponentFixture<EditarhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarhospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
