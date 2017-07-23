import { Injectable } from '@angular/core';
import { IClientService } from '../interfaces/client.service.interface'
import { ClientService } from './client.service'
import { ClientServiceMock } from './client.service.mock'
import { AppConfig } from '../../../app.config';

@Injectable()
export class ClientServiceFactory{
  constructor(private config: AppConfig) { 

  }

  getInstance():IClientService{
    let useMock: boolean = this.config.getConfig('useMock');
    if(useMock){
        return new ClientServiceMock();
    }else{
        return new ClientService();
    }
  }
}
