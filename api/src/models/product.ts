import { Document, Schema, Model, model } from "mongoose";

export interface IProduct extends Document {
  _id: String;
  name: String;
  price: Number;
  quantity: Number;
}

export const productSchema = new Schema({
  _id: String,
  name: String,
  price: Number,
  quantity: Number
});



export const Product: Model<IProduct> = model<IProduct>("Product", productSchema);