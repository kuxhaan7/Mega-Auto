import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MasterModule } from './admin/master/master.module';
import { InventoryModule } from './admin/inventory/inventory.module';
import { AuctionsModule } from './admin/auctions/auctions.module';
import { UsersModule } from './admin/users/users.module';
import { AuctionsscheduleModule } from './admin/auctionsschedule/auctionsschedule.module';
import { MastertypeModule } from './admin/mastertype/mastertype.module';
import { CmsModule } from './admin/cms/cms.module';
import { WatchlistModule } from './watchlist/watchlist.module';
import { BidsModule } from './admin/bids/bids.module';
import { TowingModule } from './admin/towing/towing.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, MastertypeModule,MasterModule, UsersModule, InventoryModule, AuctionsModule, AuctionsscheduleModule, CmsModule, WatchlistModule, BidsModule, TowingModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
