import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMasterDto {
  @ApiProperty({ description: 'The name of the master entity' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The code of the master entity' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'The ID of the parent entity', required: false })
  @IsOptional()
  @IsString()
  parentId?: string;

  @ApiProperty({ description: 'The status of the master entity', required: false })
  @IsOptional()
  status: number;

  // Define a date field
  @ApiProperty({ description: 'The Create Date of of the Master entity', required: false })
  @IsOptional()
  createdAt: Date;

  // Optional date field
  @IsOptional()
  updatedAt: Date;
}
