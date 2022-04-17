import { NextFunction, Request, Response } from "express";
import Bookstore from '../models/bookstore';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Bookstore.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'All Bookstore Locations: ',
        result
    });
};


const create = async(req: Request, res: Response, next: NextFunction) => {

    const { cName, cBookstores} = req.body;

    // TODO Validate parameters

    const bookstore = new Bookstore({
        _id : new mongoose.Types.ObjectId,
        cName,
        cBookstores,
    });


    const result = await bookstore.save();

    return res.status(201).json({
        messagge : 'New Bookstore Registered Successfully!',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { cName, cBookstores} = req.body;

    // VALIDATE 
    const result = await Bookstore.findByIdAndUpdate(id, { cName, cBookstores}, { new: true});

    return res.status(200).json({
        messagge : 'Bookstore Updated Successfully!',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Bookstore.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : 'Bookstore Delated',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Bookstore.findById(id);

    return res.status(201).json({
        messagge : 'Bookstore Found!',
        result
    });
};

export default { getAll, create, update, remove, get}