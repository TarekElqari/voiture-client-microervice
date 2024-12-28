import { Routes } from '@angular/router';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { CarListComponent } from './car/components/car-list/car-list.component';
import { HomeComponent } from './home/components/home/home.component';

export const routes: Routes = [
    { path: 'clients', component: ClientListComponent },
  { path: 'cars', component: CarListComponent },
  {path:'', component: HomeComponent}
];
