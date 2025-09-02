import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auctions.dto';
import { UpdateAuctionDto } from './dto/update-auctions.dto';

@Controller('auction')
export class AuctionController {

  constructor(private readonly auctionService: AuctionsService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new Auction Source' })
  @ApiResponse({ status: 201, description: 'The Auction source has been successfully created.' })
  async create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionService.create(createAuctionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Auction' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved auctions.' })
  async findAll() {
    return this.auctionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a auctoin by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Master.' })
  @ApiResponse({ status: 404, description: 'auction not found.' })
  async findOne(@Param('id') id: string) {
    return this.auctionService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Auction by ID' })
  @ApiResponse({ status: 200, description: 'The Auction has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Auction not found.' })
  async update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
    return this.auctionService.update(id, updateAuctionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Auction by ID' })
  @ApiResponse({ status: 200, description: 'The Auction has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Auction not found.' })
  async delete(@Param('id') id: string) {
    return this.auctionService.delete(id);
  }


}
