import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cms } from './schema/cms.schema';
import { Model } from 'mongoose';
import { CreateCmsDto } from './dto/create-cms.dto';
import { UpdateCmsDto } from './dto/update-cms.dto';

@Injectable()
export class CmsService {

    constructor(@InjectModel(Cms.name) private cmsModel: Model<Cms>) { }

    // Create an Master
    async create(createCmsDto: CreateCmsDto): Promise<Cms> {
      const newCmsPage = new this.cmsModel(createCmsDto);
      return newCmsPage.save();
    }
  
    // Get all CMS Pages
    async findAll(): Promise<Cms[]> {
      return this.cmsModel.find().exec();
    }
  
    // Get an CMS Page by ID
    async findOne(id: string): Promise<Cms> {
      const CmsPage = await this.cmsModel.findById(id).exec();
      if (!CmsPage) {
        throw new NotFoundException(`CMS Page with ID ${id} not found`);
      }
      return CmsPage;
    }
  
    // Update an CMS Page by ID
    async update(id: string, updateCmsDto: UpdateCmsDto): Promise<Cms> {
      const updatedCmsPage = await this.cmsModel.findByIdAndUpdate(id, updateCmsDto, { new: true }).exec();
      if (!updatedCmsPage) {
        throw new NotFoundException(`CMS Page with ID ${id} not found`);
      }
      return updatedCmsPage;
    }
  
    // Delete an CMS Page by ID
    async delete(id: string): Promise<Cms> {
      const deletedCmsPage = await this.cmsModel.findByIdAndDelete(id).exec();
      if (!deletedCmsPage) {
        throw new NotFoundException(`CMS Page with ID ${id} not found`);
      }
      return deletedCmsPage;
    }
}
