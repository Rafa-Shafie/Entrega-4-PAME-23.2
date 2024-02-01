import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { EstoqueService } from './estoque.service';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post()
  create(@Body() CreateEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(CreateEstoqueDto);
  }

  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, UpdateEstoqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}