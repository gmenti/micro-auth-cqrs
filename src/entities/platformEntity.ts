import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany } from "typeorm";
import { Identifier } from "./identifierEntity";

@Entity({ name: 'platforms' })
@Unique('platform/slug', ['slug'])
export class Platform {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Identifier, identifier => identifier.platform)
    identifiers: Identifier[];

    @Column('varchar', { length: 100 })
    name: string;
    
    @Column('varchar', { length: 20, unique: true })
    slug: string;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}