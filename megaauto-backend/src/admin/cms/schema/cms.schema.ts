import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Cms extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    subtitle: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    created_by: number;

    @Prop({ required: true })
    status: number;
    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const CmsSchema = SchemaFactory.createForClass(Cms);
