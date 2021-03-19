import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import Color from 'src/app/models/color';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor :Color;
  allColors:boolean=true;
  dataLoaded = false;
  allcolor=true;
  
  constructor(
    private colorService:ColorService 
    )
   {}

  ngOnInit(): void {
    this.getColors();
   /*  this.setAllColors();  */
  }

  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true;
    })
  }
  setCurrentColor(color:Color)
  {
    console.log(color.id)
    this.currentColor=color
  }
  getCurrentColorClass(color:Color)
  {
    this.allColors=false;
    /*  this.allcolor=false; */
     if(color==this.currentColor)
     {
       return "list-group-item active"
     } 
     else
     {
       return "list-group-item"
     }
  }

  setAllColors()
  {
      this.allColors=true;
      console.log("set all colors-yes "+this.allcolor)
  }

  getAllColorsClass()
  {
      if(this.allColors==true)
      {
       return "list-group-item active"
      }
      else
      {
       return "list-group-item"
      }
  }
}