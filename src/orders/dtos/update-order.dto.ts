/* eslint-disable prettier/prettier */
//import { Transform } from 'class-transformer';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  //@Min(0)
  @IsUUID()
  productId: string;

  @IsUUID()
  clientId: string;
}
