import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidForm } from './bid-form';

describe('BidForm', () => {
  let component: BidForm;
  let fixture: ComponentFixture<BidForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
