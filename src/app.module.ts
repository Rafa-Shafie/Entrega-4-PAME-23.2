import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovelModule } from './movel/movel.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { EstoqueModule } from './estoque/estoque.module';
import { PrismaService } from './prisma/prisma.service';
import { TransportadoraModule } from './transportadora/transportadora.module';

@Module({
  imports: [FuncionarioModule, MovelModule, PedidosModule, EstoqueModule, TransportadoraModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
