import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new Vehicle Inventory' })
  @ApiResponse({ status: 201, description: 'The Vehicle has been successfully added.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Inventory' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved inventory.' })
  async findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Vehicle by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved vehicle.' })
  @ApiResponse({ status: 404, description: 'Vehicle not found.' })
  async findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Vehicle by ID' })
  @ApiResponse({ status: 200, description: 'The Vehicles has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Vehicles not found.' })
  async update(@Param('id') id: string, @Body() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Vehicle by ID' })
  @ApiResponse({ status: 200, description: 'The Vehicle has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Vehicle not found.' })
  async delete(@Param('id') id: string) {
    return this.inventoryService.delete(id);
  }


}
