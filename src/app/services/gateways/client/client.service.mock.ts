import { IClientService } from '../interfaces/client.service.interface'
import {Observable} from 'rxjs/Observable';

export class ClientServiceMock implements IClientService{

  constructor() { 
  }

  getById(id: string): Observable<any>{
    return new Observable(observer => {
      observer.next(  
        {
          "id" : "4",
          "name" : "Troy Fang",
          "phone": "6041234567",
          "email": "123@gmail.com",
          "imageUrl": "app/assets/images/male.jpg",
          "street": "1234 No.3 Road",
          "city": "New westminster",
          "province": "British Columbia",
          "country": "Canada",
          "postCode": "V3B123",
          "birthPlaceProvince" : "台湾",
          "birthPlaceCity" : "高雄",
          "birthday" : "1989-04-03",
          "expectedInvestmentAmount": "1",
          "InterestedInvestmentType": ["1", "2"],
          "thumbnailUrl": "app/assets/images/male-thumbnail.jpg",
          "birthdayTaskId": "1",
          "birthdayTaskUsers": ["Kyle Cullham", "Joanna Lin", "David Chaves"]
        }
      );
      observer.complete();
    });
  }; 
  getList(filter: object): Observable<any[]>{
    return new Observable(observer => {
      observer.next([
        {
          "id" : "1",
          "name" : "Peter Zhou",
          "phone": "6041234567",
          "email": "123@gmail.com",
          "city": "Coquitlam",
          "birthPlace" : "江苏-南京",
          "birthday" : "1987-04-03",
          "expectedInvestmentAmount": "$1,000,000.00",
          "thumbnailUrl": "app/assets/images/male-thumbnail.jpg"
        },
        {
          "id" : "2",
          "name" : "Tony He",
          "phone": "6041234567",
          "email": "123@gmail.com",
          "city": "Burnaby",
          "birthPlace" : "湖北-武汉",
          "birthday" : "1989-04-03",
          "expectedInvestmentAmount": "$3,000,000.00",
          "thumbnailUrl": "app/assets/images/male-thumbnail.jpg"
        },
        {
          "id" : "3",
          "name" : "Kevin Li",
          "phone": "6041234567",
          "email": "123@gmail.com",
          "city": "Vancouver",
          "birthPlace" : "北京",
          "birthday" : "1987-04-03",
          "expectedInvestmentAmount": "$4,000,000.00",
          "thumbnailUrl": "app/assets/images/male-thumbnail.jpg"
        },
        {
          "id" : "4",
          "name" : "Troy Fang",
          "phone": "6041234567",
          "email": "123@gmail.com",
          "city": "New westminster",
          "birthPlace" : "台湾-高雄",
          "birthday" : "1989-04-03",
          "expectedInvestmentAmount": "$5,000,000.00",
          "thumbnailUrl": "app/assets/images/male-thumbnail.jpg"
        }
      ]);
      observer.complete();
    });
  };
  getListByCompanyId(): Observable<any>{
    return new Observable();
  };

}
