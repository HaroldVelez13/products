
import { Request, Response } from "express";
import { IProduct, Product } from "../models/product";

export class ProductController {

    public async getProducts(_req: Request, res: Response): Promise<void> {
        const products = await Product.find();
        res.json({ products });
    }

    public async getProduct(req: Request, res: Response): Promise<void> {
        const product = await Product.findOne({ _id: req.params._id });
        if (product === null) {
            res.sendStatus(404);
        } else {
            res.json(product);
        }
    }

    public async createProduct(req: Request, res: Response): Promise<void> {
        const newProduct: IProduct = new Product(req.body);

        const result = await newProduct.save();
        if (result === null) {
            res.sendStatus(500);
        } else {
            res.status(201).json({ status: 201, data: result });
        }


    }

    public async updateProduct(req: Request, res: Response): Promise<void> {
        const product = await Product.findOneAndUpdate({ _id: req.params._id }, req.body);
        if (product === null) {
            res.sendStatus(404);
        } else {
            const updatedProduct = { _id: req.params._id, ...req.body };
            res.json({ status: res.status, data: updatedProduct });
        }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        const product = await Product.findOneAndDelete({ _id: req.params._id });
        if (product === null) {
            res.sendStatus(404);
        } else {
            res.json({ response: "Product deleted Successfully" });
        }
    }
}