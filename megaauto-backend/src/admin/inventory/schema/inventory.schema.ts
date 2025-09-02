import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Inventory extends Document {
    @Prop({ required: true })
    added_by: Types.ObjectId;

    @Prop({ required: true })
    category: Types.ObjectId;

    @Prop({ required: true })
    country: Types.ObjectId;

    @Prop({ required: true })
    state: Types.ObjectId;

    @Prop({ required: true })
    city: Types.ObjectId;

    @Prop({ required: true })
    address: string;

    @Prop({ required: false })
    car_keys: number;

    @Prop({ required: false })
    brand: String;

    @Prop({ required: false })
    auction_date: Date;

    @Prop({ required: false })
    auction_name: String;

    @Prop({ required: false })
    run_no: String;

    @Prop({ required: true })
    make: Types.ObjectId;

    @Prop({ required: true })
    make_name: string;

    @Prop({ required: true })
    modl: Types.ObjectId;

    @Prop({ required: true })
    model_name: string;

    @Prop({ required: true })
    year: String;

    @Prop({ required: true })
    vin: String;

    @Prop({ required: true })
    car_type: Types.ObjectId; // sedan , suv 

    @Prop({ required: true })
    doors: String; // 1 door, 2 doors

    @Prop({ required: true })
    price: number; // $1000

    @Prop({ required: false })
    acv: number; // $1000

    @Prop({ required: false })
    run_drive: number; // 1,0

    @Prop({ required: true })
    starting_bid: number; // $520

    @Prop({ required: true })
    currency: String; // USD / CAD


    @Prop({ required: true })
    milage: number; // 175652 KM

    @Prop({ required: true })
    milage_type: String; //  KM

    @Prop({ required: true })
    bid_or_buy: number; //  1 for bid , 2 for buy

    @Prop({ required: true })
    exterior: String; //  Gray , Blue , Black

    @Prop({ required: false })
    interior: String; //  Gray , Blue , Black

    @Prop({ required: false })
    engine: String; //  

    @Prop({ required: false })
    cylinders: String; //  

    @Prop({ required: false })
    fuel_type: String; //  

    @Prop({ required: true })
    transmission: String; //  

    @Prop({ required: true })
    images: String[]; // 

    
    @Prop({ required: true })
    title: String; //  Clean Title , Salvage title , Pending Title

    @Prop({ required: true })
    is_approved: number; // 0 / 1 ,  0 for un approved , 1 for approved 

    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const InventorySchema = SchemaFactory.createForClass(Inventory);