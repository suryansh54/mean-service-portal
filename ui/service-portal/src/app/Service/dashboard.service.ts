import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  dummyDataService() {
    return from([1,2,3,4,5]);
  }

  serverCommunication() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
  }
}
