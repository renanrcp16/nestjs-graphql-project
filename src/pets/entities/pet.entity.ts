import { Owner } from './../../owners/entities/owner.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
	@PrimaryGeneratedColumn()
	@Field(() => Int)
	id: number

	@Column()
	@Field()
	name: string

	@Column({ nullable: true })
	@Field({ nullable: true })
	type?: string

	@Column()
	@Field(() => Int)
	ownerId: number

	@ManyToOne(() => Owner, owner => owner.pets)
	@Field(() => Owner)
	owner: Owner
}