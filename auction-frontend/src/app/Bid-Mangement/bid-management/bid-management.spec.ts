import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidManagement } from './bid-management';

describe('BidManagement', () => {
  let component: BidManagement;
  let fixture: ComponentFixture<BidManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
