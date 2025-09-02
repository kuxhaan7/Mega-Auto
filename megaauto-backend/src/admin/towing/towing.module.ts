import { Module } from '@nestjs/common';
import { TowingController } from './towing.controller';
import { TowingService } from './towing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Towing, TowingSchema } from './schema/towing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Towing.name, schema: TowingSchema }]),
  ],
  controllers: [TowingController],
  providers: [TowingService]
})
export class TowingModule {}
