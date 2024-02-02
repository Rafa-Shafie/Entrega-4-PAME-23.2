import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionarioService {

  constructor(private prisma: PrismaService) {}
  async create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({data: CreateFuncionarioDto})
  }


  findAll() {
    return this.prisma.funcionario.findMany();
  }

  findOne(ID_funcionario: number) {
    return this.prisma.funcionario.findUnique({where: {ID_funcionario}})
  }

  findByEmail(email_funcionario: string){
    return this.prisma.funcionario.findUnique({
      where: {email_funcionario: email_funcionario}
    })
  }

  update(ID_funcionario: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({ where: {ID_funcionario}, data: updateFuncionarioDto })
  }

  remove(ID_funcionario: number) {
    this.prisma.funcionario.delete({where: {ID_funcionario}});
    return "Usuário deletado com sucesso!"
  }
}
