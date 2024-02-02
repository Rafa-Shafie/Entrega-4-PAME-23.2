import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { IsString } from 'class-validator';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
    @IsString()
    nome_funcionario: string

    @IsString()
    senha_funcionario: string

    endereco_funcionario: string

    meta_funcionario: string

    status_funcionario: string
}
