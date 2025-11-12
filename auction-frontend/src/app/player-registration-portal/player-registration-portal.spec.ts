import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRegistrationPortal } from './player-registration-portal';

describe('PlayerRegistrationPortal', () => {
  let component: PlayerRegistrationPortal;
  let fixture: ComponentFixture<PlayerRegistrationPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerRegistrationPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRegistrationPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
