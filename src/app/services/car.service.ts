import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44327/API/';

  constructor(private httpClient: HttpClient) { }

  getAllCars():Observable<CarResponseModel> {
    let newPath= this.apiUrl+'cars/getCarDetails';
    return this.httpClient.get<CarResponseModel>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<CarResponseModel> {
    let newPath= this.apiUrl+'cars/getCarsByColorId?id='+colorId;
    console.log(newPath);
    return this.httpClient.get<CarResponseModel>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<CarResponseModel> {
    let newPath= this.apiUrl+'cars/getCarsByBrandId?id='+brandId;
    console.log(newPath);
    return this.httpClient.get<CarResponseModel>(newPath);
  }

  getCarById(carId:number):Observable<CarResponseModel> {
    let newPath= this.apiUrl+'cars/getCarById?id='+carId;
    console.log(newPath);
    return this.httpClient.get<CarResponseModel>(newPath);
  }
  
}
