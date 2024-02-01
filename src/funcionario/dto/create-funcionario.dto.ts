import { IsDate, IsEmail, IsNumber, IsString, isDate } from "class-validator";

export class CreateFuncionarioDto {
    @IsString()
    nome: string;

    @IsString()
    senha: string;

    @IsEmail()
    email: string;

    @IsDate()
    aniversario: Date;

    @IsNumber()
    telefone: number;

    @IsString()
    genero: string;

    @IsString()
    endereço: string;

    @IsString()
    meta: string;
    
    @IsString()
    status: string;
}
