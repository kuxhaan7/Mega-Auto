import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateAuctionsScheduleDto {

  @ApiProperty({ description: 'The Source Id entity', required: true })
  @IsNotEmpty()
  @IsString()
  source_id: Types.ObjectId;

  @ApiProperty({ description: 'The Auction Location entity', required: true })
  @IsNotEmpty()
  @IsString()
  auction_location: String;

  @ApiProperty({ description: 'The Start Date entity', required: true })
  @IsNotEmpty()
  @IsString()
  start_date: Date;

  @ApiProperty({ description: 'The State entity', required: true })
  @IsNotEmpty()
  @IsString()
  end_date: Date;

  @ApiProperty({ description: 'The Order entity', required: false })
  @IsOptional()
  @IsString()
  order: number;

  @ApiProperty({ description: 'is this auction enable to show?', required: false })
  @IsNotEmpty()
  @IsString()
  is_approved: number; // 0 / 1 ,  0 for un approved , 1 for approved 

  // Define a date field
  @ApiProperty({ description: 'The Create Date Entity', required: false })
  @IsOptional()
  createdAt: Date;

  // Optional date field
  @IsOptional()
  updatedAt: Date;
}
