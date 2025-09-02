import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Watchlist extends Document {
    @Prop({ required: true })
    userid: Types.ObjectId;

    @Prop({ type: Types.ObjectId, required: true })
    vehicleid: Types.ObjectId;

    // Year title
    @Prop({ type: String, required: true })
    year: string;

    // Make title
    @Prop({ type: String, required: true })
    make_title: string;

    //model
    @Prop({ required: true })
    model_title: string;

    //vin  title
    @Prop({ type: String, required: true })
    vin: string;

    //auction date  title
    @Prop({ type: String, required: true })
    auction_date: string;


    //auction location  title
    @Prop({ type: String, required: true })
    auction_location: string;


    //auction city  title
    @Prop({ type: String, required: true })
    auction_city: Types.ObjectId;


    //auction state  title
    @Prop({ type: String, required: true })
    auction_state: Types.ObjectId;


    //auction country  title
    @Prop({ type: String, required: true })
    auction_country: Types.ObjectId;


    //vehicle_link
    @Prop({ type: String, required: true })
    vehicle_link: string;

    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;

}

export const WatchlistSchema = SchemaFactory.createForClass(Watchlist);