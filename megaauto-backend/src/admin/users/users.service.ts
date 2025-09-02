import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './schema/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) { }

  // Create an User
  async create(createUserDto: CreateUserDto): Promise<Users> {
      console.log("CreateUserDto Received:", createUserDto);
      console.log("✅ Saving new user to DB");
    const { email, password } = createUserDto;
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    // Create new user with hashed password
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return newUser.save();
  }

  // Get all Users
  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  // Get an User by ID
  async findOne(id: string): Promise<Users> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Update an User by ID
  async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  // Delete an User by ID
  async delete(id: string): Promise<Users> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return deletedUser;
  }

  async findByUsername(username: string): Promise<Users | undefined> {
    return this.userModel.findOne({ username });
  }
}
