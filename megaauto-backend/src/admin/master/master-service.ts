import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Master } from './schema/master.schema' // Adjust the path according to your project structure
import { CreateMasterDto } from './dto/create-master.dto';  // DTO for creating Masters
import { UpdateMasterDto } from './dto/update-master.dto';  // DTO for updating Masters

@Injectable()
export class MasterService {
  constructor(@InjectModel(Master.name) private masterModel: Model<Master>) { }

  // Create an Master
  async create(createMasterDto: CreateMasterDto): Promise<Master> {
    const newMaster = new this.masterModel(createMasterDto);
    return newMaster.save();
  }

  // Get all Masters
  async findAll(): Promise<Master[]> {
    return this.masterModel.find().exec();
  }

  // Get an Master by ID
  async findOne(id: string): Promise<Master> {
    const Master = await this.masterModel.findById(id).exec();
    if (!Master) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return Master;
  }

  // Update an Master by ID
  async update(id: string, updateMasterDto: UpdateMasterDto): Promise<Master> {
    const updatedMaster = await this.masterModel.findByIdAndUpdate(id, updateMasterDto, { new: true }).exec();
    if (!updatedMaster) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return updatedMaster;
  }

  // Delete an Master by ID
  async delete(id: string): Promise<Master> {
    const deletedMaster = await this.masterModel.findByIdAndDelete(id).exec();
    if (!deletedMaster) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return deletedMaster;
  }
}
