import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TowingService } from './towing.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTowingDto } from './dto/create-towing.dto';
import { UpdateTowingDto } from './dto/update-towing.dto';

@Controller('towing')
export class TowingController {
    constructor(private readonly towingService: TowingService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Towing' })
    @ApiResponse({ status: 201, description: 'The Towing has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async create(@Body() createTowingDto: CreateTowingDto) {
      return this.towingService.create(createTowingDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all towings' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Bids.' })
    async findAll() {
      return this.towingService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a towing by ID' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Bids.' })
    @ApiResponse({ status: 404, description: 'Towing not found.' })
    async findOne(@Param('id') id: string) {
      return this.towingService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update a towing by ID' })
    @ApiResponse({ status: 200, description: 'The towing has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'Towing not found.' })
    async update(@Param('id') id: string, @Body() UpdateTowingDto: UpdateTowingDto) {
      return this.towingService.update(id, UpdateTowingDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a towing by ID' })
    @ApiResponse({ status: 200, description: 'The towing has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'towing not found.' })
    async delete(@Param('id') id: string) {
      return this.towingService.delete(id);
    }

}
