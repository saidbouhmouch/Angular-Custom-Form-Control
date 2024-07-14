import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PhoneNumberInputModule } from './app/phone-number-input/phone-number-input.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports:[PhoneNumberInputModule,ReactiveFormsModule,FormsModule],
  standalone: true,
  template: `
    <form [formGroup]="form">
      <label for="phone">Phone number:</label>
      <app-phone-number-input formControlName="phone"></app-phone-number-input>
    </form>
  `,
})
export class App {
  name = 'Angular';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
       phone:["06 00 00 00 00"]
    });
  }


}

bootstrapApplication(App);
