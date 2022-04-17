import { Document } from 'mongoose';

export default interface IMobileCompany extends Document{
    cName: string,
    cBookstores:{
        locations: string,
    },
}