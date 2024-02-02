import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovelModule } from './movel/movel.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { EstoqueModule } from './estoque/estoque.module';
import { PrismaService } from './prisma/prisma.service';
import { TransportadoraModule } from './transportadora/transportadora.module';
import { DeModule } from './auth/de/de.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FuncionarioModule, MovelModule, PedidosModule, EstoqueModule, TransportadoraModule, DeModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService, AuthService],
})
export class AppModule {}
