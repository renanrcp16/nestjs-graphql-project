import { Pet } from './../../pets/entities/pet.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
	@PrimaryGeneratedColumn()
	@Field(() => Int)
	id: number

	@Column()
	@Field()
	name: string

	@OneToMany(() => Pet, pet => pet.owner)
	@Field(() => [Pet], { nullable: true })
	pets?: Pet[]
}
