import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateTowingDto {
    @ApiProperty({ description: 'The Country entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    country: Types.ObjectId;

    @ApiProperty({ description: 'The State entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    state: Types.ObjectId;

    @ApiProperty({ description: 'The City entity' ,required:false})
    @IsNotEmpty()
    @IsString()
    city: Types.ObjectId;

    @ApiProperty({ description: 'The Price entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    vehicle_id: number;

    @ApiProperty({ description: 'The Start From entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    start_from: Date;

    @ApiProperty({ description: 'The End From entity' ,required:true})
    @IsNotEmpty()
    @IsString()
    end_from: Date;

    // Define a date field
    @ApiProperty({ description: 'The Create Date of of the cms entity', required: false })
    @IsOptional()
    createdAt: Date;

    // Optional date field
    @IsOptional()
    updatedAt: Date;
}
