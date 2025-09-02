import { Injectable, NotFoundException } from '@nestjs/common';
import { Watchlist, WatchlistSchema } from './schema/watch-list.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateWatchListDto } from './dto/create-watchlist.dto';
import { UpdateWatchListDto } from './dto/update-watchlist.dto';

@Injectable()
export class WatchlistService {
    constructor(@InjectModel(Watchlist.name) private masterModel: Model<Watchlist>) { }

  // Create an Master
  async create(createWatchlistDto: CreateWatchListDto): Promise<Watchlist> {
    const newMaster = new this.masterModel(createWatchlistDto);
    return newMaster.save();
  }

  // Get all Masters
  async findAll(): Promise<Watchlist[]> {
    return this.masterModel.find().exec();
  }

  // Get an Master by ID
  async findOne(id: string): Promise<Watchlist> {
    const Master = await this.masterModel.findById(id).exec();
    if (!Master) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return Master;
  }

  // Update an Master by ID
  async update(id: string, updateWatchListDto: UpdateWatchListDto): Promise<Watchlist> {
    const updatedMaster = await this.masterModel.findByIdAndUpdate(id, updateWatchListDto, { new: true }).exec();
    if (!updatedMaster) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return updatedMaster;
  }

  // Delete an Master by ID
  async delete(id: string): Promise<Watchlist> {
    const deletedMaster = await this.masterModel.findByIdAndDelete(id).exec();
    if (!deletedMaster) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return deletedMaster;
  }
}
