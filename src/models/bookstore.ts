import { Schema } from "mongoose";
import mongoose from "mongoose";
import  IBookstore  from "./interfaces/book";

const cBookstores = new Schema({
    locations: {type: String, required: true},
})

const BookDetails: Schema = new Schema({
    cName: {type: String, required: true},
    cBookstores: {type: [cBookstores], required: true},
    },{
        timestamps: true
    })

export default mongoose.model<IBookstore>('Bookstore', BookDetails);