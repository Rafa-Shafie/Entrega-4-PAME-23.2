import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { FuncionarioService } from 'src/funcionario/funcionario.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, FuncionarioService]
})
export class AuthModule {}

