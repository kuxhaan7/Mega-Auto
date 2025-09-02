import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { isValidObjectId, Types } from 'mongoose';

export class CreateWatchListDto {


    @ApiProperty({ description: 'The USER-ID of the watch list entity',required:true })
    @IsNotEmpty()
    userid: Types.ObjectId;

    @ApiProperty({ description: 'The vehicle id of the watch list entity',required:true })
    @IsNotEmpty()
    vehicleid: Types.ObjectId;

    // Year title
    @ApiProperty({ description: 'The Year of the watch list entity',required:true })
    @IsNotEmpty()
    @IsString()
    year: string;

    // Make title
    @ApiProperty({ description: 'The Make Title of the watch list entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    make_title: string;

    //model
    @ApiProperty({ description: 'The model title of the watch list entity',required:true })
    @IsNotEmpty()
    @IsString()
    model_title: string;

    //vin  title
    @ApiProperty({ description: 'The VIN of the watch list entity' })
    @IsNotEmpty()
    @IsString()
    vin: string;

    //auction date  title
    @ApiProperty({ description: 'The Auction Date of the watch list entity' })
    @IsNotEmpty()
    @IsString()
    auction_date: string;


    //auction location  title
    @ApiProperty({ description: 'The Auction Location of the watch list entity' })
    @IsNotEmpty()
    @IsString()
    auction_location: string;


    //auction city  title
    @ApiProperty({ description: 'The City of the Watch list entity' })
    @IsNotEmpty()
    @IsString()
    auction_city: Types.ObjectId;


    //auction state  title
    @ApiProperty({ description: 'The Auction state of the watch list entity' })
    @IsNotEmpty()
    @IsString()
    auction_state: Types.ObjectId;


    //auction country  title
    @ApiProperty({ description: 'The Auction Country of the Watch List entity',required:true })
    @IsNotEmpty()
    @IsString()
    auction_country: Types.ObjectId;


    //vehicle_link
    @ApiProperty({ description: 'The Vehicle Link of the Watch List entity',required:true })
    @IsNotEmpty()
    @IsString()
    vehicle_link: string;

    // Define a date field
    @ApiProperty({ description: 'The Created At of the Watch List entity',required:true })
    @IsNotEmpty()
    @IsString()
    createdAt: Date;

    // Optional date field
    @ApiProperty({ description: 'The Updated AT of the Watch List entity',required:false })
    @IsNotEmpty()
    @IsString()
    updatedAt: Date;
}
