/**
 * @description
 * `PhoneNumberInputComponent` is a custom form control component that implements the `ControlValueAccessor` interface,
 * allowing it to be used within Angular forms. This component provides a phone number input field and integrates with
 * Angular's form control mechanism.
 * 
 * @selector app-phone-number-input
 * @templateUrl ./phone-number-input.component.html
 * @styleUrls ['./phone-number-input.component.css']
 * @providers [
 *   {
 *     provide: NG_VALUE_ACCESSOR,
 *     useExisting: forwardRef(() => PhoneNumberInputComponent),
 *     multi: true,
 *   },
 * ]
 */
 import { Component, forwardRef } from '@angular/core';
 import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
 
 @Component({
   selector: 'app-phone-number-input',
   templateUrl: './phone-number-input.component.html',
   styleUrls: ['./phone-number-input.component.css'],
   providers: [
     {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => PhoneNumberInputComponent),
       multi: true,
     },
   ],
 })
 export class PhoneNumberInputComponent implements ControlValueAccessor {
 
   
   private onModelChange!: (value: string) => void;
   private onTouched!: () => void
   public phoneNumber!: string;
 
   /**
    * @description
    * Writes a new value to the phone number input.
    * 
    * @param value The new value to write to the input.
    */
   public writeValue(value: string): void {
     this.phoneNumber = value;
   }
 
   /**
    * @description
    * Registers a callback function to be called when the value of the input changes.
    * 
    * @param fn The callback function to register.
    */
   public registerOnChange(fn: (value: string) => void): void {
     this.onModelChange = fn;
   }
 
   /**
    * @description
    * Registers a callback function to be called when the input is touched.
    * 
    * @param fn The callback function to register.
    */
   public registerOnTouched(fn: () => void): void {
     this.onTouched = fn;
   }
 
   /**
    * @description
    * Handles the change event for the phone number input, updating the component's value and calling the registered callbacks.
    * 
    * @param event The change event from the input field.
    */
   onPhoneNumberChanged(event: any): void {
     this.phoneNumber = event.target.value;
     this.onModelChange(this.phoneNumber);
     this.onTouched();
   }
 }
 