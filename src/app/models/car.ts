import { CarImage } from "./carImage";

export interface Car{
    id:number;
    colorId:number;
    colorName:string;
    brandId:number;
    brandName:string;
    name:string;
    dailyPrice:number;
    description:string;
    modelYear:number;
    images: CarImage[];
}