import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateMovelDto {
    @IsNumber()
    Valor_movel: number;

    @IsString()
    Nome_movel: string;

    @IsString()
    Descricao_movel: string;

    @IsString()
    Tipo_movel: string;

    @IsString()
    Status_movel: string;
    
    @IsDate()
    Data_fabricacao_movel: Date;
}
