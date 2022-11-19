import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearhospitalComponent } from './crearhospital.component';

describe('CrearhospitalComponent', () => {
  let component: CrearhospitalComponent;
  let fixture: ComponentFixture<CrearhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearhospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
