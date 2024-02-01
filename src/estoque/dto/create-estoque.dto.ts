import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateEstoqueDto {
    @IsNumber()
    Total_categoria_móvel_estoque: number;

    @IsDate()
    Data_entrada_estoque: Date;

    @IsString()
    Historico_estoque: string;

    @IsNumber()
    Quantidade_estoque: number;
    
    @IsString()
    Nome_estoque: string;
}
