import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Auctions extends Document {
  @Prop({ required: true })
  name: string;
  // Self-referencing parent_id field
  @Prop({ required: true })
  shortname: string

  @Prop({ required: true })
  is_approved: number;

  @Prop({ required: false })
  createdAt: Date

  @Prop({ required: false })
  updatedAt: Date

}

export const AuctionsSchema = SchemaFactory.createForClass(Auctions);
