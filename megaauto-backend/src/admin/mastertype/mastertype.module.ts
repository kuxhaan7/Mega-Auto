import { Module } from '@nestjs/common';
import { MastertypeController } from './mastertype.controller';
import { MastertypeService } from './mastertype.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MasterType, MasterTypeSchema } from './schema/mastertype.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MasterType.name, schema: MasterTypeSchema }]),
  ],
  controllers: [MastertypeController],
  providers: [MastertypeService]
})
export class MastertypeModule {}
