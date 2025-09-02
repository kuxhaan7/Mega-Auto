import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MastertypeService } from './mastertype.service';
import { CreateMasterTypeDto } from './dto/create-mastertype.dto';
import { UpdateMasterTypeDto } from './dto/update-mastertype.dto';

@Controller('mastertype')
export class MastertypeController {
    constructor(private readonly masterTypeService: MastertypeService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Master Type' })
    @ApiResponse({ status: 201, description: 'The Master Typehas been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async create(@Body() createMasteTyperDto: CreateMasterTypeDto) {
      return this.masterTypeService.create(createMasteTyperDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all Master Type' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Master Type.' })
    async findAll() {
      return this.masterTypeService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a MasterType by ID' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Master Type.' })
    @ApiResponse({ status: 404, description: 'MasterType not found.' })
    async findOne(@Param('id') id: string) {
      return this.masterTypeService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update a Master by ID' })
    @ApiResponse({ status: 200, description: 'The Master Type Type has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'Master Type not found.' })
    async update(@Param('id') id: string, @Body() updateMasterTypeDto: UpdateMasterTypeDto) {
      return this.masterTypeService.update(id, updateMasterTypeDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Master Type by ID' })
    @ApiResponse({ status: 200, description: 'The Master Type has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Master Type not found.' })
    async delete(@Param('id') id: string) {
      return this.masterTypeService.delete(id);
    }
  
  
}
