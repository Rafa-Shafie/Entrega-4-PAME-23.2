import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { IsString } from 'class-validator';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
    @IsString()
    nome: string;

    @IsString()
    senha: string;

    @IsString()
    endereço: string;

    @IsString()
    meta: string;
    
    @IsString()
    status: string;
}
