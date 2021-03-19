import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44327/api";
  constructor(private httpClient:HttpClient) { }

  getCarById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = "/Cars/getCarById?id="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl+newPath)
  }
}