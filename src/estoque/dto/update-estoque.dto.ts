import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
    Nome_estoque: number;
    Total_movel_estoque: number;
    Quantidade_estoque: number;
}
