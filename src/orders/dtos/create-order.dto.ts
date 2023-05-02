/* eslint-disable prettier/prettier */
//import { Transform } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsUUID()
  clientId: string;
}
