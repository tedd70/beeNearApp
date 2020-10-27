import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupContainerComponent } from './-pickup-container.component';

describe('PickupContainerComponent', () => {
  let component: PickupContainerComponent;
  let fixture: ComponentFixture<PickupContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
