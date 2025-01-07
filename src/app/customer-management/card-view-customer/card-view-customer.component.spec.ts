import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewCustomerComponent } from './card-view-customer.component';

describe('CardViewCustomerComponent', () => {
  let component: CardViewCustomerComponent;
  let fixture: ComponentFixture<CardViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
