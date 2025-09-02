import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Bids extends Document {
    @Prop({ required: true })
    source_id: Types.ObjectId;

    @Prop({ required: true })
    user_id: Types.ObjectId;

    @Prop({ required: true })
    assigned_by: Types.ObjectId;

    @Prop({ required: true })
    vehicle_id: Types.ObjectId;

    @Prop({ required: true })
    city: Types.ObjectId;
    
    @Prop({ required: true })
    state: Types.ObjectId;

    @Prop({ required: true })
    country: Types.ObjectId;
    
    
    @Prop({ required: true })
    auction_date: Date;

    @Prop({ required: true })
    vin: String;

    @Prop({ required: true })
    year: String;

    @Prop({ required: true })
    make_title: String;

    @Prop({ required: true })
    model_title: String;

    @Prop({ required: false })
    acv : number;

    @Prop({ required: true })
    Brand : String;

    @Prop({ required: false })
    type_of_wreck : String;

    @Prop({ required: false })
    is_keys : number;

    @Prop({ required: true })
    fuel_type : string;

    @Prop({ required: true }) // 1 for electric 0 for duel 2 hybird
    is_electric : number;

    @Prop({ required: true })
    transmission : string;

    @Prop({ required: false })
    is_turbo : number;

    @Prop({ required: false })
    nbr_cylinders : number;

    @Prop({ required: true })
    liters : string;

    @Prop({ required: false })
    drive_line_type : string;

    @Prop({ required: true })
    odometer : string;

    @Prop({ required: true })
    vehicle_type : string;

    @Prop({ required: true })
    lot_number : string;

    @Prop({ required: true })
    min_bid : number;

    @Prop({ required: true })
    bid : number;
    
    @Prop({ required: true })
    won_amount : number;

    @Prop({ required: true })
    engine_type : string;

    @Prop({ required: true })
    trim : string;

    @Prop({ required: true })
    bid_status : number;

    @Prop({ required: true })
    update_comment : string;

    @Prop({ required: true })
    updated_by : Types.ObjectId;
    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const BidsSchema = SchemaFactory.createForClass(Bids);
