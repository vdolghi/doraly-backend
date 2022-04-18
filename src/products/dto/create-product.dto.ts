import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly code: string;

  @IsNotEmpty()
  readonly weight: number;

  @IsNotEmpty()
  readonly color: string;

  @IsNotEmpty()
  readonly isDeleted: boolean;
}
