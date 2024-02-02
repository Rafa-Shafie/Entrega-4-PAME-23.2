import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({ email_funcionario : 'email', senha_funcionario: 'senha'})
    }

    validate(email_funcionario: string, senha_funcionario: string){
        return this.AuthService.validateUser(email_funcionario,senha_funcionario)
    }
}