import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMasterTypeDto {
    @ApiProperty({ description: 'The name of the master type entity' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'The code of the master type entity' })
    @IsNotEmpty()
    @IsString()
    code: string;


    @ApiProperty({ description: 'The status of the master type entity' }) // wheather it's approved or not
    @IsNotEmpty()
    @IsString()
    status: number;

    // Define a date field
    @ApiProperty({ description: 'The Created At of the master type entity' })
    @IsOptional()
    @IsString()
    createdAt: Date;

    // Optional date field
    @ApiProperty({ description: 'The Updated At of the master type entity' })
    @IsOptional()
    @IsString()
    updatedAt: Date;
}
