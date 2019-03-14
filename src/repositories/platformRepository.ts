import { Repository, EntityRepository } from "typeorm";
import { Platform } from "src/entities/platformEntity";

@EntityRepository(Platform)
export class PlatformRepository extends Repository<Platform> {}