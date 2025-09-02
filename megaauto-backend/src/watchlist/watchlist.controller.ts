import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WatchlistService } from './watchlist.service';
import { CreateWatchListDto } from './dto/create-watchlist.dto';
import { UpdateWatchListDto } from './dto/update-watchlist.dto';


@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService) {} 
  @Post()
  @ApiOperation({ summary: 'Create a new Watch list' })
  @ApiResponse({ status: 200, description: 'The Watch list has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createWatchListDto: CreateWatchListDto) {
    return this.watchlistService.create(createWatchListDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Watch list' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Watch list.' })
  async findAll() {
    return this.watchlistService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Watch list by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Watch list.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: string) {
    return this.watchlistService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Watch list by ID' })
  @ApiResponse({ status: 200, description: 'The Watch list has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Watch list not found.' })
  async update(@Param('id') id: string, @Body() updateWatchListDto: UpdateWatchListDto) {
   return this.watchlistService.update(id, updateWatchListDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Watch list by ID' })
  @ApiResponse({ status: 200, description: 'The Watch list has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Watch list not found.' })
  async delete(@Param('id') id: string) {
    return this.watchlistService.delete(id);
  }

}
