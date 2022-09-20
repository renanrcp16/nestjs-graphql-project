import { Owner } from './../owners/entities/owner.entity';
import { OwnersService } from './../owners/owners.service';
import { Pet } from './entities/pet.entity';
import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
	constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>, private ownersService: OwnersService) { }

	create(createPetInput: CreatePetInput): Promise<Pet> {
		const newPet = this.petsRepository.create(createPetInput); // newPet = new Pet(); new.name = input.name
		return this.petsRepository.save(newPet) // insert
	}

	async findAll(): Promise<Pet[]> {
		return this.petsRepository.find() // SELECT * FROM pet
	}

	findOne(id: number): Promise<Pet> {
		return this.petsRepository.findOneOrFail({ where: { id } });
	}

	getOwner(ownerId: number): Promise<Owner> {
		return this.ownersService.findOne(ownerId)
	}

	// update(id: number, updatePetInput: UpdatePetInput) {
	// 	return `This action updates a #${id} pet`;
	// }

	// remove(id: number) {
	// 	return `This action removes a #${id} pet`;
	// }
}
