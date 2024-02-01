import { PartialType } from '@nestjs/mapped-types';
import { CreateMovelDto } from './create-movel.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateMovelDto extends PartialType(CreateMovelDto) {
    @IsNumber()
    Valor_movel: number;

    @IsString()
    Nome_movel: string;

    @IsString()
    Status_movel: string;
}
