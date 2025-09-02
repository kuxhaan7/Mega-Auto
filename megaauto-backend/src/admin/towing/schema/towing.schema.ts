import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Towing extends Document {
    @Prop({ required: true })
    country: Types.ObjectId;

    @Prop({ required: true })
    state: Types.ObjectId;

    @Prop({ required: true })
    city: Types.ObjectId;

    @Prop({ required: true })
    price: Types.ObjectId;

    @Prop({ required: true })
    start_from: Types.ObjectId;
    
    @Prop({ required: true })
    end_from: Types.ObjectId;

    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const TowingSchema = SchemaFactory.createForClass(Towing);
