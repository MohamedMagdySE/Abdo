import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetBusinessService {

  constructor(private http: Http) { }

  clientGetBusiness(id){
  		return this.http.get('http://35.163.158.122:8080/clients/ViewBusinesses/'+id).map(res=>res.json());
  }

  guestGetBusiness(id){
      return this.http.get('http://35.163.158.122:8080/ViewBusinesses/'+id).map(res=>res.json());
  }


}
