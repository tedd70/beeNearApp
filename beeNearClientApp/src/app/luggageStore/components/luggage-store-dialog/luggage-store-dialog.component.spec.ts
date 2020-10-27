import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageStoreDialogComponent } from './luggage-store-dialog.component';

describe('LuggageStoreDialogComponent', () => {
  let component: LuggageStoreDialogComponent;
  let fixture: ComponentFixture<LuggageStoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuggageStoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggageStoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
