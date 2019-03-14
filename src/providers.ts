import { createConnection, Connection } from 'typeorm';
import { User } from './entities/userEntity';
import { Identifier } from './entities/identifierEntity';
import { Platform } from './entities/platformEntity';
import { Password } from './entities/passwordEntity';
import * as env from './env';
import { Provider } from '@nestjs/common';
import { PasswordRepository } from './repositories/passwordRepository';
import { PlatformRepository } from './repositories/platformRepository';
import { IdentifierRepository } from './repositories/identifierRepository';
import { UserRepository } from './repositories/userRepository';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: env.DB_HOSTNAME,
            port: env.DB_PORT,
            username: env.DB_USERNAME,
            password: env.DB_PASSWORD,
            database: env.DB_NAME,
            entities: [User, Identifier, Platform, Password],
            synchronize: true,
        }),
    },
];

export const appProviders: Provider[] = [
    {
        provide: 'UserRepositoryToken',
        useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'IdentifierRepositoryToken',
        useFactory: (connection: Connection) => connection.getCustomRepository(IdentifierRepository),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'PlatformRepositoryToken',
        useFactory: (connection: Connection) => connection.getCustomRepository(PlatformRepository),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'PasswordRepositoryToken',
        useFactory: (connection: Connection) => connection.getCustomRepository(PasswordRepository),
        inject: ['DbConnectionToken'],
    },
]