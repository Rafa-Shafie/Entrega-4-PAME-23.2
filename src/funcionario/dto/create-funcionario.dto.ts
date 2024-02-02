import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateFuncionarioDto {
    @IsString()
    nome_funcionario: string

    @IsString()
    senha_funcionario: string

    @IsEmail()
    email_funcionario: string

    @IsDate()
    aniversario_funcionario: Date

    @IsNumber()
    telefone_funcionario: number

    @IsString()
    genero_funcionario: string

    endereco_funcionario: string

    meta_funcionario: string

    status_funcionario: string
}
