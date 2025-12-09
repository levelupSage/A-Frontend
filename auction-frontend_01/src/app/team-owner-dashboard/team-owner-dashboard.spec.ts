import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOwnerDashboard } from './team-owner-dashboard';

describe('TeamOwnerDashboard', () => {
  let component: TeamOwnerDashboard;
  let fixture: ComponentFixture<TeamOwnerDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamOwnerDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamOwnerDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
