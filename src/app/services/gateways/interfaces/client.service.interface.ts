import {Observable} from 'rxjs/Observable';

export interface IClientService{
    getById(id: string): Observable<any>;
    getList(filter: any): Observable<any[]>;
    getListByCompanyId(): Observable<any[]>;
}