import { Module } from '@nestjs/common';
import { MovelService } from './movel.service';
import { MovelController } from './movel.controller';

@Module({
  controllers: [MovelController],
  providers: [MovelService],
})
export class MovelModule {}
