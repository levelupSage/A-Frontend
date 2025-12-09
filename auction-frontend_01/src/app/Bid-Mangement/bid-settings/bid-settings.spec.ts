import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidSettings } from './bid-settings';

describe('BidSettings', () => {
  let component: BidSettings;
  let fixture: ComponentFixture<BidSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
