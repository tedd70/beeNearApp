import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-luggage-store-form',
  templateUrl: './luggage-store-form.component.html',
  styleUrls: ['./luggage-store-form.component.scss']
})
export class LuggageStoreFormComponent implements OnInit {
  public storeForm: FormGroup;

  @Output() add = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.storeForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      numberOfLuggage: ['', 
        [
          Validators.required, 
          Validators.min(1), 
          Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
          Validators.max(9)
        ]
      ]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }

    this.add.emit(form);
    this.storeForm.reset();
  }
}
