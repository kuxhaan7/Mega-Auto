import { Module } from '@nestjs/common';
import { MasterController } from './master.controller';
import { MasterService } from './master-service';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from './schema/master.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Master.name, schema: MasterSchema }]),
  ],
  controllers: [MasterController],
  providers: [MasterService]
})
export class MasterModule {}
