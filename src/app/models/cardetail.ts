import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDetail{
    car: Car;
    images: CarImage[];
}