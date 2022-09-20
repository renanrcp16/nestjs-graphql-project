import { OwnersModule } from './../owners/owners.module';
import { Pet } from './entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';

@Module({
	imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
	providers: [PetsResolver, PetsService]
})
export class PetsModule { }
