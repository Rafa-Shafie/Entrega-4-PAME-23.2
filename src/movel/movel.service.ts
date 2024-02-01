import { Injectable } from '@nestjs/common';
import { CreateMovelDto } from './dto/create-movel.dto';
import { UpdateMovelDto } from './dto/update-movel.dto';

@Injectable()
export class MovelService {
  create(createMovelDto: CreateMovelDto) {
    return 'This action adds a new movel';
  }

  findAll() {
    return `This action returns all movel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movel`;
  }

  update(id: number, updateMovelDto: UpdateMovelDto) {
    return `This action updates a #${id} movel`;
  }

  remove(id: number) {
    return `This action removes a #${id} movel`;
  }
}
