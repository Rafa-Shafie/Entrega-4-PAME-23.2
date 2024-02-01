import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @IsString()
    Status_pedido: string;

    @IsString()
    Metodo_pagamento: string;

    @IsNumber()
    Valor_pedido: number;

    @IsString()
    Produtos_pedido: string;

    @IsString()
    Feedback_cliente: string;

    @IsString()
    Lista_pedido: string;
}
