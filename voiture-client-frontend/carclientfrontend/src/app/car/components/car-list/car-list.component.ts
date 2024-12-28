import { Component, OnInit } from '@angular/core';
import { CarResponse } from '../../services/car-service.service';
import { CarService } from '../../services/car-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule]
})
export class CarListComponent implements OnInit {
  cars: CarResponse[] = [];
  filteredCars: CarResponse[] = [];
  selectedCar: CarResponse | null = null;
  searchId: string = ''; // Search input for Car ID

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
      this.filteredCars = data; // Initially display all cars
      console.log(data);
    });
  }

  // Filter cars by ID
  filterCarsById(): void {
    if (this.searchId) {
      this.filteredCars = this.cars.filter(car => car.id.toString().includes(this.searchId));
    } else {
      this.filteredCars = this.cars; // If no search term, show all cars
    }
  }

  viewCarDetails(id: number): void {
    this.carService.getCarById(id).subscribe(data => {
      this.selectedCar = data;
    });
  }

  closeModal(): void {
    this.selectedCar = null;
  }
}
