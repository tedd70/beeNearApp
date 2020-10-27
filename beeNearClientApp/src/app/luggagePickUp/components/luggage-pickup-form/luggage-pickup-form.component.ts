import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-luggage-pickup-form',
  templateUrl: './luggage-pickup-form.component.html',
  styleUrls: ['./luggage-pickup-form.component.scss']
})
export class LuggagePickupFormComponent implements OnInit {
  public pickupForm: FormGroup;
  public submitted: boolean = false;

  @Output() getaccess = new EventEmitter();
  @Output() showModalAction = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pickupForm = this.fb.group({
      accessCode: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.getaccess.emit(form);
    this.pickupForm.reset();
    this.submitted = false;
  }
}
