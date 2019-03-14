import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from 'src/services/userService';
import { CreateUserDto } from 'src/dtos/createUserDto';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto.identifier, dto.password);
    }
}
