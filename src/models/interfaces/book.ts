import { Document } from 'mongoose';

export default interface IMobile extends Document{
    author: string,
    name: string,
    genres: string,
    pyear: number,
}