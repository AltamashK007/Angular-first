

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pageTitle: string = 'Welcome to Our Website!';
  heroImage: string =
 'https://cdn.shopify.com/s/files/1/0070/7032/files/homepage-lyka2.png?v=1703001797'
  // pageDescription: string =
  //   'Discover amazing products and services tailored just for you. Browse our collections and find exactly what you need.';
}
