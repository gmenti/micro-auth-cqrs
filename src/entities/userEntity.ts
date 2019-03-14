import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Identifier } from "./identifierEntity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50 })
    firstName: string;

    @Column('varchar', { length: 50 })
    lastName: string;

    @OneToMany(type => Identifier, identifier => identifier.user)
    identifiers: Identifier[];
    
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}