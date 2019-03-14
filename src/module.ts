import { Module } from '@nestjs/common';
import { databaseProviders, appProviders } from './providers';
import { UserService } from './services/userService';
import { UserController } from './controllers/userController';

@Module({
  controllers: [UserController],
  providers: [...databaseProviders, ...appProviders, UserService],
})
export class ApplicationModule {}
  