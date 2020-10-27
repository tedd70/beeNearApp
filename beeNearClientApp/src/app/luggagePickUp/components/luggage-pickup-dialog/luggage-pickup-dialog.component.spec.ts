import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggagePickupDialogComponent } from './luggage-pickup-dialog.component';

describe('LuggagePickupDialogComponent', () => {
  let component: LuggagePickupDialogComponent;
  let fixture: ComponentFixture<LuggagePickupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuggagePickupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggagePickupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
