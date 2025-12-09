import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPlayers } from './registered-players';

describe('RegisteredPlayers', () => {
  let component: RegisteredPlayers;
  let fixture: ComponentFixture<RegisteredPlayers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredPlayers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredPlayers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
