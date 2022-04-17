import { NextFunction, Request, Response } from "express";
import Book from '../models/book';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Book.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'Books Available: ',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {
    const { author, name, genres, pyear } = req.body;

    // TODO Validate parameters

    const book = new Book({
        _id : new mongoose.Types.ObjectId,
        author,
        name,
        genres,
        pyear,
       
    });

 

    const result = await book.save();

    return res.status(201).json({
        messagge : 'New Book Registered Successfully!',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { author, name, genres, pyear } = req.body;

    // VALIDATE 
    const result = await Book.findByIdAndUpdate(id, { author, name, genres, pyear }, { new: true});

    return res.status(200).json({
        messagge : 'Book Updated Successfully',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Book.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : 'Book Delated',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Book.findById(id);

    return res.status(201).json({
        messagge : 'Book Found!',
        result
    });
};

export default { getAll, create, update, remove, get}