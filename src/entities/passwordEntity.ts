import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Identifier } from "./identifierEntity";

@Entity({ name: 'passwords' })
export class Password {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 500 })
    hash: string;

    @ManyToOne(type => Identifier, identifier => identifier.passwords)
    identifier: Identifier;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;
}