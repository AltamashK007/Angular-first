import { Component } from '@angular/core';
import Swal from 'sweetalert2'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Smart Watch',
      price: 199.99,
      image:
      "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      price: 129.99,
      image: "https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988",
    },
    {
      id: 3,
      name: 'Portable Speaker',
      price: 79.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdY0bZ1wRZTCtAqHpgPVAu58nijZIH8EXhTA&s",
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      price: 89.99,
      image: 'https://m.media-amazon.com/images/I/61GvwAAMvNL._AC_UF1000,1000_QL80_.jpg'
    },
  ];

  addToCart(product: Product) {
    Swal.fire({
      title: "Added Successfully!",
      text: `Added ${product.name} to cart`,
      icon: "success"
    });
    console.log(``);
  }
}
