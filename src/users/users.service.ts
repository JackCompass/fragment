import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly USER_LIST = [
        {
            username: "anuj_singh",
            password: "242784"
        }, {
            username: "sanskar",
            password: "useless"
        }
    ]
    constructor() {}
    findUser(username: string) {
        return this.USER_LIST.find( user => user.username === username);
    }

}
