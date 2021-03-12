export interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    passwordHash:BinaryType;
    passwordSalt:BinaryType;
    status:boolean;
    }
