import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MasterType } from './schema/mastertype.schema';
import { CreateMasterTypeDto } from './dto/create-mastertype.dto';
import { UpdateMasterTypeDto } from './dto/update-mastertype.dto';

@Injectable()
export class MastertypeService {
    constructor(@InjectModel(MasterType.name) private masterTypeModel: Model<MasterType>) { }

    // Create an Master type
    async create(createMasterTypeDto: CreateMasterTypeDto): Promise<MasterType> {
      const newMasterType = new this.masterTypeModel(createMasterTypeDto);
      return newMasterType.save();
    }
  
    // Get all Master types
    async findAll(): Promise<MasterType[]> {
      return this.masterTypeModel.find().exec();
    }
  
    // Get an Master type by ID
    async findOne(id: string): Promise<MasterType> {
      const MasterType = await this.masterTypeModel.findById(id).exec();
      if (!MasterType) {
        throw new NotFoundException(`Master Type with ID ${id} not found`);
      }
      return MasterType;
    }
  
    // Update an Master type by ID
    async update(id: string, updateMasterTypeDto: UpdateMasterTypeDto): Promise<MasterType> {
      const updatedMasterType = await this.masterTypeModel.findByIdAndUpdate(id, updateMasterTypeDto, { new: true }).exec();
      if (!updatedMasterType) {
        throw new NotFoundException(`Master Type with ID ${id} not found`);
      }
      return updatedMasterType;
    }
  
    // Delete an Master type by ID
    async delete(id: string): Promise<MasterType> {
      const deletedMasterType = await this.masterTypeModel.findByIdAndDelete(id).exec();
      if (!deletedMasterType) {
        throw new NotFoundException(`Master Type with ID ${id} not found`);
      }
      return deletedMasterType;
    }
}
