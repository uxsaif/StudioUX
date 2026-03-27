import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  InputComponent,
  CheckboxComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  DialogComponent,
} from '../../components';

/**
 * Example: Sign-Up feature — one vertical slice using BASES Angular components.
 *
 * Demonstrates: Button (basic + flat), Input, Card, Dialog, Checkbox.
 * States: default → validation error → loading → success.
 */
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    DialogComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  name = '';
  email = '';
  agreed = false;
  loading = false;
  success = false;
  errors: Record<string, string> = {};

  validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!this.name.trim()) errs['name'] = 'Name is required';
    if (!this.email.trim()) {
      errs['email'] = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errs['email'] = 'Enter a valid email';
    }
    if (!this.agreed) errs['agreed'] = 'You must agree to continue';
    return errs;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.errors = this.validate();
    if (Object.keys(this.errors).length > 0) return;

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 1500);
  }

  closeDialog(): void {
    this.success = false;
  }
}
