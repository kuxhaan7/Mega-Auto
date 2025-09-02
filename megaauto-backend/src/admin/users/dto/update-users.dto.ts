import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateUserDto {
    @ApiProperty({ description: 'The username of the users entity', required: true })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ description: 'The first_name of the users entity', required: true })
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({ description: 'The last_name of the users entity', required: true })
    @IsNotEmpty()
    @IsString()
    last_name: string;

    // @ApiProperty({ description: 'The email of the users entity', required: true })
    // @IsNotEmpty()
    // @IsString()
    // email: string;

    @ApiProperty({ description: 'The email of the users entity', required: true })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ description: 'The Conact No of the users entity', required: true })
    @IsNotEmpty()
    @IsString()
    contact_no: string;

    @ApiProperty({ description: 'The Address of the users entity', required: true })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({ description: 'The User Type of the users entity', required: false })
    @IsOptional()
    @IsString()
    user_type: number;

    @ApiProperty({ description: 'The isbroker of the users entity', required: false })
    @IsOptional()
    @IsString()
    isbroker: number;

    @ApiProperty({ description: 'The can add bidders of the users entity', required: false })
    @IsOptional()
    @IsString()
    can_add_bidders: number;

    @ApiProperty({ description: 'The status of the users entity', required: false })
    @IsNotEmpty()
    status: number;
    // Define a date field
    @ApiProperty({ description: 'The Create Date of of the users entity', required: false })
    @IsOptional()
    createdAt: Date;

    // Optional date field
    @IsOptional()
    updatedAt: Date;
}