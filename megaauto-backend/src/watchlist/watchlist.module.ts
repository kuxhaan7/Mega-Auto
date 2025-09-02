import { Module } from '@nestjs/common';
import { WatchlistController } from './watchlist.controller';
import { WatchlistService } from './watchlist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Watchlist, WatchlistSchema } from './schema/watch-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:Watchlist.name, schema: WatchlistSchema }]),
  ],
  controllers: [WatchlistController],
  providers: [WatchlistService]
})
export class WatchlistModule {}
