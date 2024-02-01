import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportadoraDto } from './create-transportadora.dto';
import { IsString } from 'class-validator';

export class UpdateTransportadoraDto extends PartialType(CreateTransportadoraDto) {
    @IsString()
    Nome_transportadora: string;

    @IsString()
    Status_transportadora: string;
}
