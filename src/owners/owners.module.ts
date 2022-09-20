import { Owner } from './entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';

@Module({
	imports: [TypeOrmModule.forFeature([Owner])],
	providers: [OwnersResolver, OwnersService],
	exports: [OwnersService]
})
export class OwnersModule { }
