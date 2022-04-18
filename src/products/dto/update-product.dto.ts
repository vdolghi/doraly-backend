import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  readonly name?: string;
  readonly price?: number;
  readonly code?: string;
  readonly weight?: number;
  readonly color?: string;
  readonly isDeleted?: boolean;
}
