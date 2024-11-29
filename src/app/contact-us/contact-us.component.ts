
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl:'./contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  pageTitle: string = 'Contact Us';
  pageDescription: string = 'Have a question or suggestion? Reach out to us using the form below.';

  contactForm = {
    name: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact Form Submitted:', this.contactForm);
    this.contactForm = { name: '', subject: '', message: '' };
  }
}