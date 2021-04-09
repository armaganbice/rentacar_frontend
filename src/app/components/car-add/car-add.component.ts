import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  /* carId:number;
  colorId:number;
  colorName:string;
  brandId:number;
  brandName:string;
  name:string;
  dailyPrice:number;
  description:string;
  modelYear:number;
  images: CarImage[];
  status: boolean; */

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      colorId: ['', Validators.required],
      colorName: ['', Validators.required],
      brandId: ['', Validators.required],
      brandName: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      modelYear: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe((response) => {
        console.log(response);
        this.toastrService.success(response.message, 'Successful');
      });
    } else {
      this.toastrService.error('Car not added', "error Validation");
    }
  }
}
