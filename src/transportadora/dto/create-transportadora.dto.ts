import { IsString } from "class-validator";

export class CreateTransportadoraDto {
    @IsString()
    Nome_transportadora: string;

    @IsString()
    Status_transportadora: string;
}
