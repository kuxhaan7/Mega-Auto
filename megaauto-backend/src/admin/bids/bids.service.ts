import { Injectable, NotFoundException } from '@nestjs/common';
import { Bids } from './schema/bids.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBidsDto } from './dto/create-bids.dto';
import { UpdateBidsDto } from './dto/update-bids.dto';

@Injectable()
export class BidsService {
    constructor(@InjectModel(Bids.name) private cmsModel: Model<Bids>) { }

    // Create an Master
    async create(createBidsDto: CreateBidsDto): Promise<Bids> {
      const newCmsPage = new this.cmsModel(createBidsDto);
      return newCmsPage.save();
    }
  
    // Get all CMS Pages
    async findAll(): Promise<Bids[]> {
      return this.cmsModel.find().exec();
    }
  
    // Get an CMS Page by ID
    async findOne(id: string): Promise<Bids> {
      const CmsPage = await this.cmsModel.findById(id).exec();
      if (!CmsPage) {
        throw new NotFoundException(`Bid with ID ${id} not found`);
      }
      return CmsPage;
    }
  
    // Update an CMS Page by ID
    async update(id: string, updateBidsDto: UpdateBidsDto): Promise<Bids> {
      const updatedCmsPage = await this.cmsModel.findByIdAndUpdate(id, updateBidsDto, { new: true }).exec();
      if (!updatedCmsPage) {
        throw new NotFoundException(`Bid with ID ${id} not found`);
      }
      return updatedCmsPage;
    }
  
    // Delete an CMS Page by ID
    async delete(id: string): Promise<Bids> {
      const deletedCmsPage = await this.cmsModel.findByIdAndDelete(id).exec();
      if (!deletedCmsPage) {
        throw new NotFoundException(`Bid with ID ${id} not found`);
      }
      return deletedCmsPage;
    }
}
