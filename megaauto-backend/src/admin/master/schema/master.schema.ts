import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Master extends Document {
  @Prop({ required: true })
  name: string;
  
  // @Prop({ type: Types.ObjectId, required: true })
  // master_type: Types.ObjectId;

  // Self-referencing parent_id field
  @Prop({ type: Types.ObjectId, ref: 'master' })
  parentId?: Types.ObjectId | null;

  @Prop({ required: true })
  code: string;


  @Prop({ required: false })
  status: number;

  // Define a date field
  @Prop({ required: false })
  createdAt: Date;

  // Optional date field
  @Prop({ required: false })
  updatedAt: Date;

}

export const MasterSchema = SchemaFactory.createForClass(Master);
