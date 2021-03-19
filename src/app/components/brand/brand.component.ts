import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand : Brand;
  dataLoaded = false;
  
  constructor(private brandService:BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
    
  }

  setCurrentBrand(brand:Brand)
  {
    console.log(brand.id)
    this.currentBrand=brand 
  }
  getCurrentBrandClass(brand:Brand)
  {
    /*  this.allcolor=false; */
     if(brand==this.currentBrand)
     {
       return "list-group-item active"
     } 
     else
     {
       return "list-group-item"
     }
  }
}

