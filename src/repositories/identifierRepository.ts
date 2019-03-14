import { Repository, EntityRepository } from "typeorm";
import { Identifier } from "src/entities/identifierEntity";

@EntityRepository(Identifier)
export class IdentifierRepository extends Repository<Identifier> {}