import { Module } from '@nestjs/common';
import { BidsController } from './bids.controller';
import { BidsService } from './bids.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bids, BidsSchema } from './schema/bids.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:Bids.name, schema: BidsSchema }]),
  ],
  controllers: [BidsController],
  providers: [BidsService]
})
export class BidsModule {}
