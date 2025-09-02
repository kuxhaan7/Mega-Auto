import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuctionsSchedule } from './schema/auctionsschedule.schema';
import { Model } from 'mongoose';
import { CreateAuctionsScheduleDto } from './dto/create-auctionsschedule.dto';
import { UpdateAuctionsScheduleDto } from './dto/update-auctionsschedule.dto';

@Injectable()
export class AuctionsscheduleService {
  constructor(@InjectModel(AuctionsSchedule.name) private auctionScheduleModel: Model<AuctionsSchedule>) { }

  // Create an Auction Schedule
  async create(createAuctionScheduleDto: CreateAuctionsScheduleDto): Promise<AuctionsSchedule> {
    const newAuctionSchedule = new this.auctionScheduleModel(createAuctionScheduleDto);
    return newAuctionSchedule.save();
  }

  // Get all Auctions Schedule
  async findAll(): Promise<AuctionsSchedule[]> {
    return this.auctionScheduleModel.find().exec();
  }

  // Get an Auction Schedule by ID
  async findOne(id: string): Promise<AuctionsSchedule> {
    const auctionSchedule = await this.auctionScheduleModel.findById(id).exec();
    if (!auctionSchedule) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return auctionSchedule;
  }

  // Update an Auction Schedule by ID
  async update(id: string, updateAuctionScheduleDto: UpdateAuctionsScheduleDto): Promise<AuctionsSchedule> {
    const updateAuctionSchedule = await this.auctionScheduleModel.findByIdAndUpdate(id, updateAuctionScheduleDto, { new: true }).exec();
    if (!updateAuctionSchedule) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return updateAuctionSchedule;
  }

  // Delete an Auction Schedule by ID
  async delete(id: string): Promise<AuctionsSchedule> {
    const deleteAuctionSchedule = await this.auctionScheduleModel.findByIdAndDelete(id).exec();
    if (!deleteAuctionSchedule) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return deleteAuctionSchedule;
  }
}
