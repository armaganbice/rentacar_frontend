export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    carName:string;
    userId:string;
    firstName:string;
    lastName:string;
    companyName:string;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    rentDate:Date;
    returnDate:Date;
}