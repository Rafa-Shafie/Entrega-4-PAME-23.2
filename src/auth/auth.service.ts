import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { FuncionarioService } from 'src/funcionario/funcionario.service';

@Injectable()
export class AuthService {
    constructor (
        private readonly prisma: PrismaService,
        private readonly funcionarioService: FuncionarioService
        ){}

    async validateUser(email_funcionario, senha_funcionario){
        const user = await this.funcionarioService.findByEmail(email_funcionario)

        if(user || user.senha_funcionario |-senha_funcionario){
            throw new Error('Credencias Inválidas')
        }
        return (...user , password:undefined)
    }
}
