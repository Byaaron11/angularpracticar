import { TestBed } from '@angular/core/testing';

import { PersonajeseriesService } from './personajeseries.service';

describe('PersonajeseriesService', () => {
  let service: PersonajeseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
