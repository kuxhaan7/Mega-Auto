import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CmsService } from './cms.service';
import { CreateCmsDto } from './dto/create-cms.dto';
import { UpdateCmsDto } from './dto/update-cms.dto';

@Controller('cms')
export class CmsController {

    constructor(private readonly cmsService: CmsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Cms Page' })
    @ApiResponse({ status: 201, description: 'The Cms page content has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async create(@Body() createCmsDto: CreateCmsDto) {
      return this.cmsService.create(createCmsDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all Cms content pages' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Cms content pages.' })
    async findAll() {
      return this.cmsService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a Cms content page by ID' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved Cms Content page.' })
    @ApiResponse({ status: 404, description: 'Cms content page  not found.' })
    async findOne(@Param('id') id: string) {
      return this.cmsService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update a Cms content by ID' })
    @ApiResponse({ status: 200, description: 'The Cms content page has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'Cms content page not found.' })
    async update(@Param('id') id: string, @Body() UpdateCmsDto: UpdateCmsDto) {
      return this.cmsService.update(id, UpdateCmsDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Cms content page  by ID' })
    @ApiResponse({ status: 200, description: 'The Cms content page  has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Cms content page  not found.' })
    async delete(@Param('id') id: string) {
      return this.cmsService.delete(id);
    }

    
}
