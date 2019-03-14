import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, OneToMany } from "typeorm";
import { User } from "./userEntity";
import { Platform } from "./platformEntity";
import { Password } from "./passwordEntity";

enum IdentifierType {
    EMAIL_ADDRESS = 'emailAddress',
    PHONE_NUMBER = 'phoneNumber',
    DOCUMENT_NUMBER = 'documentNumber',
};

@Entity({ name: 'identifiers' })
@Unique('identifier/type_value_platform', ['type', 'value', 'platform'])
@Unique('identifier/type_user', ['type', 'user'])
export class Identifier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('enum', { enum: IdentifierType })
    type: IdentifierType;
    
    @Column('varchar', { length: 100 })
    value: string;
    
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;
    
    @UpdateDateColumn({ type: 'datetime', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
    
    @ManyToOne(type => User, user => user.identifiers, { nullable: false })
    user: User;
    
    @ManyToOne(type => Platform, platform => platform.identifiers, { nullable: false })
    platform: Platform;

    @OneToMany(type => Password, password => password.identifier)
    passwords: Password[];
}