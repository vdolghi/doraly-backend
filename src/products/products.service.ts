import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = await this.productModel.create(createProductDto);
    return createdProduct;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().where('isDeleted').equals(false).exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel
      .findOne({ _id: id })
      .where('isDeleted')
      .equals(false)
      .exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto).exec();
  }

  async remove(id: string): Promise<Product> {
    const productToDelete = await this.productModel.findById(id).exec();
    productToDelete.isDeleted = true;
    return this.productModel.findByIdAndUpdate(id, productToDelete).exec();
  }
}
