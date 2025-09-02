import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new User' })
  
  @ApiResponse({ status: 201, description: 'The User has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createUserDto: CreateUserDto) {
      console.log('Received DTO:', createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Users' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Users.' })
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Users by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved Users.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Users by ID' })
  @ApiResponse({ status: 200, description: 'The Users has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Users not found.' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Users by ID' })
  @ApiResponse({ status: 200, description: 'The Users has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Users not found.' })
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
  
}
