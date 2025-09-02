import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auctions } from './schema/auctions.schema';
import { Model } from 'mongoose';
import { CreateAuctionDto } from './dto/create-auctions.dto';
import { UpdateAuctionDto } from './dto/update-auctions.dto';

@Injectable()
export class AuctionsService {
  constructor(@InjectModel(Auctions.name) private auctionModel: Model<Auctions>) { }

  // Create an Auction
  async create(createAuctionDto: CreateAuctionDto): Promise<Auctions> {
    const newAuction = new this.auctionModel(createAuctionDto);
    return newAuction.save();
  }

  // Get all Auction
  async findAll(): Promise<Auctions[]> {
    return this.auctionModel.find().exec();
  }

  // Get an Auction by ID
  async findOne(id: string): Promise<Auctions> {
    const Auction = await this.auctionModel.findById(id).exec();
    if (!Auction) {
      throw new NotFoundException(`Auction with ID ${id} not found`);
    }
    return Auction;
  }

  // Update an Auction by ID
  async update(id: string, updateAuctionDto: UpdateAuctionDto): Promise<Auctions> {
    const updatedAuction = await this.auctionModel.findByIdAndUpdate(id, updateAuctionDto, { new: true }).exec();
    if (!updatedAuction) {
      throw new NotFoundException(`Auction with ID ${id} not found`);
    }
    return updatedAuction;
  }

  // Delete an Auction by ID
  async delete(id: string): Promise<Auctions> {
    const deletedAuction = await this.auctionModel.findByIdAndDelete(id).exec();
    if (!deletedAuction) {
      throw new NotFoundException(`Auction with ID ${id} not found`);
    }
    return deletedAuction;
  }
}
