import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './interfaces/test.interface';
import { CreateTestDTO } from 'src/test/dto/create-test.dto';

@Injectable()
export class TestService {
    constructor(@InjectModel('Test') private readonly testModel: Model<Test>) { }

    async addTest(createTestDTO: CreateTestDTO): Promise<Test> {
        const newTest = await this.testModel(createTestDTO);

        return newTest.save();
    }

    async getTest(id): Promise<Test> {
        const test = await this.testModel
            .findById(id)
            .exec();

        return test;
    }

    async getTests(): Promise<Test[]> {
        const tests = await this.testModel.find().exec();

        return tests;
    }

    async getTestNames(): Promise<string> {
        const names = await this.testModel
            .find()
            .select('name')
            .exec();
        
        return names;
    }

    async editTest(testID, createTestDTO: CreateTestDTO): Promise<Test> {
        const editedTest = await this.testModel
            .findByIdAndUpdate(testID, createTestDTO, { new: true });

        return editedTest;
    }

    async deleteTest(testID): Promise<any> {
        const deletedTest = await this.testModel
            .findByIdAndRemove(testID);

        return deletedTest;
    }
} 