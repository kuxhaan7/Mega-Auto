import { Injectable, NotFoundException } from '@nestjs/common';
import { Inventory } from './schema/inventory.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {

  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<Inventory>) { }

  // Create an Inventory
  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const newInventory = new this.inventoryModel(createInventoryDto);
    return newInventory.save();
  }

  // Get all Inventory
  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().exec();
  }

  // Get an Inventory by ID
  async findOne(id: string): Promise<Inventory> {
    const inventory = await this.inventoryModel.findById(id).exec();
    if (!inventory) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return inventory;
  }

  // Update an Inventory by ID
  async update(id: string, updateInventoryDto: UpdateInventoryDto): Promise<Inventory> {
    const updateInventory = await this.inventoryModel.findByIdAndUpdate(id, updateInventoryDto, { new: true }).exec();
    if (!updateInventory) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return updateInventory;
  }

  // Delete an Master by ID
  async delete(id: string): Promise<Inventory> {
    const deleteMaster = await this.inventoryModel.findByIdAndDelete(id).exec();
    if (!deleteMaster) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return deleteMaster;
  }

}
