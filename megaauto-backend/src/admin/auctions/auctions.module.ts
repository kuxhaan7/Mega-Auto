import { Module } from '@nestjs/common';
import { AuctionController } from './auction.controller';
import { AuctionsService } from './auctions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Auctions, AuctionsSchema } from './schema/auctions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auctions.name, schema: AuctionsSchema }]),
  ],
  controllers: [AuctionController],
  providers: [AuctionsService]
})
export class AuctionsModule {}
