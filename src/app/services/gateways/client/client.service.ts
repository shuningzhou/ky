import { IClientService } from '../interfaces/client.service.interface'
import {Observable} from 'rxjs/Observable';

export class ClientService implements IClientService{

  constructor() { 
  }

  getById(id: string): Observable<any>{
    return new Observable();
  }; 
  getList(filter: object): Observable<any[]>{
    return new Observable();
  };
  getListByCompanyId(): Observable<any[]>{
    return new Observable();
  };

}
