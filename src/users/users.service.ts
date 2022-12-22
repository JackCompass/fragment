import {Inject, Injectable} from '@nestjs/common';
import {UserInfo} from "./user.interface";
import {Repository} from "typeorm";
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";

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
    // Using repository pattern for the entities.
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}


    findUser(username: string) {
        return this.USER_LIST.find( user => user.username === username);
    }

    register(userInfo: UserInfo) {
        const user = this.userRepository.create(userInfo);
        return this.userRepository.save(user);
    }

}
