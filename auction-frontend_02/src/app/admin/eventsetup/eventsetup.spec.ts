import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSetup } from './eventsetup';

describe('Eventsetup', () => {
  let component: EventSetup;
  let fixture: ComponentFixture<EventSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
