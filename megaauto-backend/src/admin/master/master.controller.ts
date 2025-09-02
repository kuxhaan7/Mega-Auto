import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MasterService } from './master-service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new Master' })
  @ApiResponse({ status: 201, description: 'The Master has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Master' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Master.' })
  async findAll() {
    return this.masterService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Master by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Master.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: string) {
    return this.masterService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Master by ID' })
  @ApiResponse({ status: 200, description: 'The Master has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Master not found.' })
  async update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(id, updateMasterDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Master by ID' })
  @ApiResponse({ status: 200, description: 'The Master has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Master not found.' })
  async delete(@Param('id') id: string) {
    return this.masterService.delete(id);
  }

}
