import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

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

    endereco: string;

    meta: string;

    status: string;
}
