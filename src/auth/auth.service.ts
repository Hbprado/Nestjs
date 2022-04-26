import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {

    sigup(){
        return {msg: 'I have signed up'};
    }

    signin(){
        return {msg: 'I have signed up'};
    }
}
