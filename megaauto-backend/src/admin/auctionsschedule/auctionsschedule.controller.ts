import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateAuctionsScheduleDto } from './dto/create-auctionsschedule.dto';
import { AuctionsscheduleService } from './auctionsschedule.service';
import { UpdateAuctionsScheduleDto } from './dto/update-auctionsschedule.dto';

@Controller('auctionsschedule')
export class AuctionsscheduleController {
  constructor(private readonly auctionScheduleService: AuctionsscheduleService) { }
  @Post()
  @ApiOperation({ summary: 'Create a new Auction Timings' })
  @ApiResponse({ status: 201, description: 'The Auction schedule has been successfully added.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createAuctionsScheduleDto: CreateAuctionsScheduleDto) {
    return this.auctionScheduleService.create(createAuctionsScheduleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Auction Scheduled' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved auctions.' })
  async findAll() {
    return this.auctionScheduleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a auction by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved scheduled auction.' })
  @ApiResponse({ status: 404, description: 'Auction not found.' })
  async findOne(@Param('id') id: string) {
    return this.auctionScheduleService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a auction scheduled by ID' })
  @ApiResponse({ status: 200, description: 'The auction has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Auction not found.' })
  async update(@Param('id') id: string, @Body() updateAuctionScheduleDto: UpdateAuctionsScheduleDto) {
    return this.auctionScheduleService.update(id, updateAuctionScheduleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a auction by ID' })
  @ApiResponse({ status: 200, description: 'The auction has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Auction not found.' })
  async delete(@Param('id') id: string) {
    return this.auctionScheduleService.delete(id);
  }

}
