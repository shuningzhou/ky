import { Component, OnInit } from '@angular/core';
import { ClientServiceFactory } from '../../../services/gateways/client/client.service.factory';
import { IClientService } from '../../../services/gateways/interfaces/client.service.interface';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientService: IClientService;
  constructor(private serviceFactory: ClientServiceFactory) { 
  }

  ngOnInit() {
    this.clientService = this.serviceFactory.getInstance();
    this.clientService.getList({}).subscribe(clients=>{
      console.log(clients);
    });
  }
}
