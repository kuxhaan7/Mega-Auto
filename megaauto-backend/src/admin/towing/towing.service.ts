import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Towing } from './schema/towing.schema';
import { Model } from 'mongoose';
import { CreateTowingDto } from './dto/create-towing.dto';
import { UpdateTowingDto } from './dto/update-towing.dto';

@Injectable()
export class TowingService {
    constructor(@InjectModel(Towing.name) private cmsModel: Model<Towing>) { }

    // Create an Master
    async create(createTowingDto: CreateTowingDto): Promise<Towing> {
      const newCmsPage = new this.cmsModel(createTowingDto);
      return newCmsPage.save();
    }
  
    // Get all CMS Pages
    async findAll(): Promise<Towing[]> {
      return this.cmsModel.find().exec();
    }
  
    // Get an CMS Page by ID
    async findOne(id: string): Promise<Towing> {
      const CmsPage = await this.cmsModel.findById(id).exec();
      if (!CmsPage) {
        throw new NotFoundException(`Towing with ID ${id} not found`);
      }
      return CmsPage;
    }
  
    // Update an CMS Page by ID
    async update(id: string, updateTowingDto: UpdateTowingDto): Promise<Towing> {
      const updatedCmsPage = await this.cmsModel.findByIdAndUpdate(id, updateTowingDto, { new: true }).exec();
      if (!updatedCmsPage) {
        throw new NotFoundException(`Towing with ID ${id} not found`);
      }
      return updatedCmsPage;
    }
  
    // Delete an CMS Page by ID
    async delete(id: string): Promise<Towing> {
      const deletedCmsPage = await this.cmsModel.findByIdAndDelete(id).exec();
      if (!deletedCmsPage) {
        throw new NotFoundException(`Towing with ID ${id} not found`);
      }
      return deletedCmsPage;
    }

}
