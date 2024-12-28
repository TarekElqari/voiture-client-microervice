import { Component, OnInit } from '@angular/core';
import { Client } from '../../services/client-service.service';
import { ClientService } from '../../services/client-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-client-list',
  standalone: true,
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule]
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  searchId: string = '';

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  filteredClients() {
    if (!this.searchId) {
      return this.clients; 
    }
    return this.clients.filter(client => client.id.toString().includes(this.searchId));
  }
}
