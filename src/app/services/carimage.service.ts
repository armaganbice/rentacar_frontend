import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarImageResponseModel } from '../models/carImageResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44327/API/';

  constructor(private httpClient: HttpClient) { }

  getCarImagesById(carId:number):Observable<CarImageResponseModel> {
    let newPath= this.apiUrl+'carimages/getImagesbycarid?id='+carId;
    console.log(newPath);
    return this.httpClient.get<CarImageResponseModel>(newPath);
  }
  
}