import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Injectable()
export class EstoqueService {
  create(CreateEstoqueDto: CreateEstoqueDto) {
    return 'This action adds a new pedido';
  }

  findAll() {
    return `This action returns all pedidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, UpdateEstoqueDto: UpdateEstoqueDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}