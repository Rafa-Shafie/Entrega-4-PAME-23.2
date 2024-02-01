import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateFuncionarioDto {
    @IsString()
    nome: string;
// aceita apenas strings
    @IsString()
    senha: string;

    @IsEmail()
    email: string;
// aceita apenas emails
    @IsDate()
    aniversario: Date;

    @IsNumber()
    telefone: number;

    genero: string;
    endereco: string;
}
