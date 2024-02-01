import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
    @IsNumber()
    Total_categoria_móvel_estoque: number;

    @IsString()
    Historico_estoque: string;

    @IsNumber()
    Quantidade_estoque: number;
    
    @IsString()
    Nome_estoque: string;
}
