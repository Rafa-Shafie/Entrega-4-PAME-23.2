import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovelService } from './movel.service';
import { CreateMovelDto } from './dto/create-movel.dto';
import { UpdateMovelDto } from './dto/update-movel.dto';

@Controller('movel')
export class MovelController {
  constructor(private readonly movelService: MovelService) {}

  @Post()
  create(@Body() createMovelDto: CreateMovelDto) {
    return this.movelService.create(createMovelDto);
  }

  @Get()
  findAll() {
    return this.movelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovelDto: UpdateMovelDto) {
    return this.movelService.update(+id, updateMovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movelService.remove(+id);
  }
}
