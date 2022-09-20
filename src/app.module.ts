import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
			driver: ApolloDriver
		}),
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: ':memory:',
			entities: ['dist/**/*.entity{.ts,.js}'],
			synchronize: true
		}),
		PetsModule,
		OwnersModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
