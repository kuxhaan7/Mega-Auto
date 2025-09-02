import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {

  @ApiProperty({ description: 'The Added by of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  added_by: String;

  @ApiProperty({ description: 'The Category of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  category: String;

  @ApiProperty({ description: 'The Country of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  country: String;

  @ApiProperty({ description: 'The State of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  state: String;

  @ApiProperty({ description: 'The City of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  city: String;

  @ApiProperty({ description: 'The Address of the entity', required: false })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ description: 'The Keys of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  car_keys: number;

  @ApiProperty({ description: 'The Brand of the Brand entity', required: true })
  @IsNotEmpty()
  @IsString()
  brand: String;

  @ApiProperty({ description: 'The Auction date of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  auction_date: Date;

  @ApiProperty({ description: 'The Auction Name of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  auction_name: String;

  @ApiProperty({ description: 'The Run no of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  run_no: String;

  @ApiProperty({ description: 'The Make of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  make: String;

  @ApiProperty({ description: 'The Model of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  modl: String;

  @ApiProperty({ description: 'The Year of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  year: String;

  @ApiProperty({ description: 'Vin entity', required: true })
  @IsNotEmpty()
  @IsString()
  vin: String;

  @ApiProperty({ description: 'Car type entity', required: true })
  @IsNotEmpty()
  @IsString()
  car_type: String; // sedan , suv 

  @ApiProperty({ description: 'The Doors entity', required: true })
  @IsNotEmpty()
  @IsString()
  doors: String; // 1 door, 2 doors

  @ApiProperty({ description: 'The Price entity', required: true })
  @IsNotEmpty()
  @IsString()
  price: number; // $1000

  @ApiProperty({ description: 'The ACV of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  acv: number; // $1000

  @ApiProperty({ description: 'The Run Drive of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  run_drive: number; // 1,0

  @ApiProperty({ description: 'The starting bid of entity', required: true })
  @IsNotEmpty()
  @IsString()
  starting_bid: number; // $520

  @ApiProperty({ description: 'The currency of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  currency: String; // USD / CAD


  @ApiProperty({ description: 'The Milage of the entity', required: true })
  @IsNotEmpty()
  @IsString()
  milage: number; // 175652 KM

  @ApiProperty({ description: 'Milage type entity', required: true })
  @IsNotEmpty()
  @IsString()
  milage_type: String; //  KM

  @ApiProperty({ description: 'Bid or buy of the Entity', required: true })
  @IsNotEmpty()
  @IsString()
  bid_or_buy: number; //  1 for bid , 2 for buy

  @ApiProperty({ description: 'Exterior color of Entity ', required: true })
  @IsNotEmpty()
  @IsString()
  exterior: String; //  Gray , Blue , Black

  @ApiProperty({ description: 'Interior color  Entity', required: true })
  @IsNotEmpty()
  @IsString()
  interior: String; //  Gray , Blue , Black

  @ApiProperty({ description: 'Engine detail of Entity', required: false })
  @IsNotEmpty()
  @IsString()
  engine: String; //  

  @ApiProperty({ description: 'No of Cylinders of Entity', required: false })
  @IsNotEmpty()
  @IsString()
  cylinders: String; //  

  @ApiProperty({ description: 'Fuel Type of Entity', required: true })
  @IsNotEmpty()
  @IsString()
  fuel_type: String; //  

  @ApiProperty({ description: 'Transmission of the Entity', required: true })
  @IsNotEmpty()
  @IsString()
  transmission: String; //  

  @ApiProperty({ description: 'The Images of uploading Entity', required: true })
  @IsNotEmpty()
  @IsString()
  images: String[]; // 

  
  @ApiProperty({ description: 'Title of the Entity', required: true })
  @IsNotEmpty()
  @IsString()
  tittle: String; //  Clean Title , Salavage, Non - salvage


  @ApiProperty({ description: 'is this vehicle enable to show?', required: false })
  @IsNotEmpty()
  @IsString()
  is_approved: number; // 0 / 1 ,  0 for un approved , 1 for approved 

  // Define a date field
  @ApiProperty({ description: 'The Create Date of the Entity', required: false })
  @IsOptional()
  createdAt: Date;

  // Optional date field
  @IsOptional()
  updatedAt: Date;
}
