import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class UpdateBidsDto {
    @ApiProperty({ description: 'The Source id of Auction entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    source_id: Types.ObjectId;

    @ApiProperty({ description: 'The User id of users entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    user_id: Types.ObjectId;

    @ApiProperty({ description: 'The assinged_by of Leads entity' ,required:false})
    @IsOptional()
    @IsString()
    assigned_by: Types.ObjectId;

    @ApiProperty({ description: 'The vehicle_id of Inventories entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    vehicle_id: Types.ObjectId;

    @ApiProperty({ description: 'The city of cities entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    city: Types.ObjectId;

    @ApiProperty({ description: 'The state of states entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    state: Types.ObjectId;

    @ApiProperty({ description: 'The country of countries entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    country: Types.ObjectId;

    @ApiProperty({ description: 'The auction_date of auction scheduled entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    auction_date: Date;

    @ApiProperty({ description: 'The vin of inventory entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    vin: String;

    @ApiProperty({ description: 'The Year of Inventory scheduled entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    year: String;

    @ApiProperty({ description: 'The Make of master entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    make_title: String;

    @ApiProperty({ description: 'The model of master entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    model_title: String;

    @ApiProperty({ description: 'The ACV of Inventory entity' ,required:false})
    @IsOptional()
    @IsString()
    acv: number;

    @ApiProperty({ description: 'The Brand entity' ,required:false})
    @IsOptional()
    @IsString()
    Brand: String;

    @ApiProperty({ description: 'The type of wreck entity' ,required:false})
    @IsOptional()
    @IsString()
    type_of_wreck: String;

    @ApiProperty({ description: 'The is_keys entity' ,required:false})
    @IsOptional()
    @IsString()
    is_keys: number;

    @ApiProperty({ description: 'The fuel_type entity' ,required:false})
    @IsOptional()
    @IsString()
    fuel_type: string;

    // 1 for electric 0 for duel 2 hybird
    @ApiProperty({ description: 'The is_electric entity' ,required:false})
    @IsOptional()
    @IsString()
    is_electric: number;

    @ApiProperty({ description: 'The transmission entity',required:false })
    @IsOptional()
    @IsString()
    transmission: string;

    @ApiProperty({ description: 'The is_turbo entity',required:false })
    @IsOptional()
    @IsString()
    is_turbo: number;

    @ApiProperty({ description: 'The nbr_cylinders entity',required:false })
    @IsOptional()
    @IsString()
    nbr_cylinders: number;

    @ApiProperty({ description: 'The litters entity',required:false })
    @IsOptional()
    @IsString()
    liters: string;

    @ApiProperty({ description: 'The drive line type entity',required:true })
    @IsNotEmpty()
    @IsString()
    drive_line_type: string;

    @ApiProperty({ description: 'The Odometer entity',required:true })
    @IsNotEmpty()
    @IsString()
    odometer: string;

    @ApiProperty({ description: 'The vehicle type entity',required:true })
    @IsNotEmpty()
    @IsString()
    vehicle_type: string;

    @ApiProperty({ description: 'The lot number entity',required:true })
    @IsNotEmpty()
    @IsString()
    lot_number: string;

    @ApiProperty({ description: 'The Minimum bid entity',required:true})
    @IsNotEmpty()
    @IsString()
    min_bid: number;

    @ApiProperty({ description: 'The bids entity',required:true })
    @IsNotEmpty()
    @IsString()
    bid: number;

    @ApiProperty({ description: 'The wining amount entity',required:false })
    @IsOptional()
    @IsString()
    won_amount: number;


    @ApiProperty({ description: 'The engine_type entity',required:false })
    @IsNotEmpty()
    @IsString()
    engine_type: string;

    @ApiProperty({ description: 'The trim entity',required:false })
    @IsOptional()
    @IsString()
    trim: string;

    @ApiProperty({ description: 'The bid status entity',required:true })
    @IsNotEmpty()
    @IsString()
    bid_status: number;

    @ApiProperty({ description: 'The update_comment entity',required:true })
    @IsNotEmpty()
    @IsString()
    update_comment: string;

    @ApiProperty({ description: 'The updated_by entity' ,required:true })
    @IsNotEmpty()
    @IsString()
    updated_by: Types.ObjectId;

    // Define a date field
    @ApiProperty({ description: 'The Create Date of of the cms entity', required: false })
    @IsOptional()
    createdAt: Date;

    // Optional date field
    @IsOptional()
    updatedAt: Date;
}
