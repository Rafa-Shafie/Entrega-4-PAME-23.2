import { IsDate, IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {
    @IsString()
    Status_pedido: string;

    @IsDate()
    Data_pedido: Date;

    @IsString()
    Endereco_entrega: string;

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

    @IsDate()
    Data_entrega: Date;
}
