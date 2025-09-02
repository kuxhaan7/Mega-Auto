import { Module } from '@nestjs/common';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cms, CmsSchema } from './schema/cms.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cms.name, schema: CmsSchema }]),
  ],
  controllers: [CmsController],
  providers: [CmsService]
})
export class CmsModule {}
