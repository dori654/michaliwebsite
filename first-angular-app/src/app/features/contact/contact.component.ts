import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { COMPANY_CONFIG } from '../../core/config/company.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private platformId = inject(PLATFORM_ID);

  readonly company = COMPANY_CONFIG;

  formData = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  };

  submitted = signal(false);
  submitting = signal(false);
  error = signal<string | null>(null);

  onSubmit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.submitting.set(true);
    this.error.set(null);

    const { serviceId, templateId, publicKey } = this.company.emailjs;

    emailjs.send(serviceId, templateId, {
      from_name: this.formData.name,
      from_email: this.formData.email,
      phone: this.formData.phone,
      project_type: this.formData.projectType,
      message: this.formData.message,
    }, { publicKey }).then(
      () => {
        this.submitted.set(true);
        this.submitting.set(false);
      },
      () => {
        this.error.set('Something went wrong. Please try again or contact us directly.');
        this.submitting.set(false);
      }
    );
  }
}
