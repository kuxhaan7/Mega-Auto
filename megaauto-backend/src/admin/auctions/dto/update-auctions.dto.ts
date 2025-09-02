import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuctionDto {
    @ApiProperty({ description: 'The name of the auction entity', required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'The username of the auction entity', required: true })
    @IsNotEmpty()
    @IsString()
    shortname: string;

    @ApiProperty({ description: 'The email of the auction entity', required: true })
    @IsNotEmpty()
    @IsString()
    is_approved: number;

    // Define a date field
    @ApiProperty({ description: 'The Create Date of the auction entity', required: false })
    @IsOptional()
    createdAt: Date;

    // Optional date field
    @IsOptional()
    updatedAt: Date;
}
