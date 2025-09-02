import { Module } from '@nestjs/common';
import { AuctionsscheduleController } from './auctionsschedule.controller';
import { AuctionsscheduleService } from './auctionsschedule.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuctionsSchedule, AuctionsScheduleSchema } from './schema/auctionsschedule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AuctionsSchedule.name, schema: AuctionsScheduleSchema }]),
  ],
  controllers: [AuctionsscheduleController],
  providers: [AuctionsscheduleService]
})
export class AuctionsscheduleModule {}
