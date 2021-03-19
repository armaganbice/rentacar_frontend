import { Component, OnInit } from '@angular/core';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CarDetail } from 'src/app/models/cardetail';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[] = [];
  images: CarImage[] = [];
  imageBasePath = environment.baseUrl;
  dataLoaded = false;

  constructor(
    private carDetailService: CarDetailService,
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        console.log(params['carId']);
        this.getCarById(params['carId']);
        this.getCarImagesById(params['carId']);
      } else {
        this.getCarById(1);
      }
    });
  }

  getCarById(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log('get cars normal');
    });
  }

  getCarImagesById(id: number) {
    this.carImageService.getCarImagesById(id).subscribe((response) => {
      this.images = response.data;
      this.dataLoaded = true;
      console.log('get cars images normal');
    });
  }


}
