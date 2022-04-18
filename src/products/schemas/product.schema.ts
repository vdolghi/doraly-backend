import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  code: string;

  @Prop()
  weight: number;

  @Prop()
  color: string;

  @Prop()
  isDeleted: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
