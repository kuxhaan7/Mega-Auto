import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class MasterType extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    code: string;


    @Prop({ required: true })
    status: number;

    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const MasterTypeSchema = SchemaFactory.createForClass(MasterType);
