import { PartialType } from '@nestjs/mapped-types';
import { CreateMovelDto } from './create-movel.dto';

export class UpdateMovelDto extends PartialType(CreateMovelDto) {}
