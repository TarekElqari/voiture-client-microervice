import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}
  navigateToClients() {
    this.router.navigate(['clients']);
    console.log('Navigating to clients');
  }
  navigateToCars() {
    this.router.navigate(['cars']);
    console.log('Navigating to cars');
  }

}
