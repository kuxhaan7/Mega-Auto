import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class AuctionsSchedule extends Document {
    @Prop({ required: true })
    source_id: Types.ObjectId;

    @Prop({ required: true })
    auction_location: String;

    @Prop({ required: true })
    start_date: Date;

    @Prop({ required: true })
    end_date: Date;

    @Prop({ required: false })
    order: number;

    @Prop({ required: true })
    is_approved: number; // 0 / 1 ,  0 for un approved , 1 for approved 

    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const AuctionsScheduleSchema = SchemaFactory.createForClass(AuctionsSchedule);