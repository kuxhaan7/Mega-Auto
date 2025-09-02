import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BidsService } from './bids.service';
import { CreateBidsDto } from './dto/create-bids.dto';
import { UpdateBidsDto } from './dto/update-bids.dto';

@Controller('bids')
export class BidsController {

    constructor(private readonly bidsService: BidsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Bid' })
    @ApiResponse({ status: 201, description: 'The Bid has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async create(@Body() createBidsDto: CreateBidsDto) {
      return this.bidsService.create(createBidsDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all Bids' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Bids.' })
    async findAll() {
      return this.bidsService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a Bids by ID' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Bids.' })
    @ApiResponse({ status: 404, description: 'Bids not found.' })
    async findOne(@Param('id') id: string) {
      return this.bidsService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update a Bid by ID' })
    @ApiResponse({ status: 200, description: 'The Bid has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'Bid not found.' })
    async update(@Param('id') id: string, @Body() UpdateBidsDto: UpdateBidsDto) {
      return this.bidsService.update(id, UpdateBidsDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Bid by ID' })
    @ApiResponse({ status: 200, description: 'The Bid has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Bid not found.' })
    async delete(@Param('id') id: string) {
      return this.bidsService.delete(id);
    }


}
