import { Repository, EntityRepository } from "typeorm";
import { User } from "src/entities/userEntity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {}