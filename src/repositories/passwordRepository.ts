import { Repository, EntityRepository } from "typeorm";
import { Password } from "src/entities/passwordEntity";

@EntityRepository(Password)
export class PasswordRepository extends Repository<Password> {}