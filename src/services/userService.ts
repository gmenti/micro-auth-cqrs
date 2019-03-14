import { Injectable, Inject } from "@nestjs/common";
import { CreateUserDto } from "src/dtos/createUserDto";
import { IdentifierRepository } from "src/repositories/identifierRepository";
import { UserRepository } from "src/repositories/userRepository";

@Injectable()
export class UserService {

    constructor(
        @Inject('UserRepositoryToken')
        private readonly userRepository: UserRepository,
        
        @Inject('IdentifierRepositoryToken')
        private readonly identifierRepository: IdentifierRepository
    ) { }

    async create(dto: CreateUserDto) {
        //
    }
}
