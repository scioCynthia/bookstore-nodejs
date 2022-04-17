import { Schema } from "mongoose";
import mongoose from "mongoose";
import  IBook  from "./interfaces/book";

const BookDetails: Schema = new Schema({
    author: {type: String, required: true},
    name: {type: String, required: true},
    genres: {type: String, required: true},
    pyear: {type: Number, required: true},

    },{
        timestamps: true
    })

export default mongoose.model<IBook>('Book', BookDetails);