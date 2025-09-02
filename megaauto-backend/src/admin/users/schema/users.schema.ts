import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Users extends Document {


    @Prop({ required: true,default:0 })
    user_type: number; // 0 customer normal user , 1 Admin , 2 Lead owner .

    @Prop({ required: true,default:"" })
    company_name: string;

    @Prop({ required: true,default:"" })
    first_name: string;

    @Prop({ required: true,default:"" })
    last_name: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    contact_no: string;

    @Prop({ required: false })
    address: string;

    @Prop({ required: false,default:0 })
    isbroker: number;

    @Prop({ required: false,default:0 })
    can_add_bidders: number;

    @Prop({ required: false,default:0 })
    status: number;
    // Define a date field
    @Prop({ required: false })
    createdAt: Date;

    // Optional date field
    @Prop({ required: false })
    updatedAt: Date;
}
export const UsersSchema = SchemaFactory.createForClass(Users);