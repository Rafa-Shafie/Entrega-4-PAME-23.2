import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionarioService {

  constructor(private prisma: PrismaService) {}
  async create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({Data: createFuncionarioDto});
  }

  findAll() {
    return this.prisma.funcionario.findMany();
  }

  findOne(ID: number) {
    return this.prisma.funcionario.findUnique({where: {ID}});
  }

  update(ID: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({where: {ID}, data: updateFuncionarioDto});
  }

  remove(ID: number) {
    this.prisma.funcionario.delete({where: {ID}});
    return "Usuário deletado com sucesso!"
  }
}
