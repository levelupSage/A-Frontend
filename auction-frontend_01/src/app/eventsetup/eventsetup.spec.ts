import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventsetup } from './eventsetup';

describe('Eventsetup', () => {
  let component: Eventsetup;
  let fixture: ComponentFixture<Eventsetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventsetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventsetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
