import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetReviewsService {

  constructor(private http:Http) { }

  GetReviews(id) {

  return this.http.get('http://35.163.158.122:8080/clients/ViewReviews/'+id).map(res => res.json());
  }


GetAnnoucements(id)
{
  return this.http.get('http://35.163.158.122:8080/clients/ViewAnnoucements/'+id).map(res => res.json());
}

}
