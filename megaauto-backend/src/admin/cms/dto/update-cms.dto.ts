import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCmsDto {
  @ApiProperty({ description: 'The title of cms C entity' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The subtitle of the cms entity' })
  @IsNotEmpty()
  @IsString()
  subtitle: string;

  @ApiProperty({ description: 'The content of the cms entity', required: true })
  @IsOptional()
  @IsString()
  content: string;

  @ApiProperty({ description: 'The created_by of the cms entity', required: true })
  @IsOptional()
  @IsString()
  created_by: string;
  
  @ApiProperty({ description: 'The status of the cms entity', required: true })
  @IsOptional()
  status: number;

  // Define a date field
  @ApiProperty({ description: 'The Create Date of of the cms entity', required: false })
  @IsOptional()
  createdAt: Date;

  // Optional date field
  @IsOptional()
  updatedAt: Date;
}
