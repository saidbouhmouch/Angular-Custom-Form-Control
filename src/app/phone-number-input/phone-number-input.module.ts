import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberInputComponent } from './phone-number-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhoneNumberInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [PhoneNumberInputComponent],
})
export class PhoneNumberInputModule {}
