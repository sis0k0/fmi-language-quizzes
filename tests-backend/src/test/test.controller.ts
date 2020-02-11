import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { TestService } from './test.service';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';
import { CreateTestDTO } from 'src/test/dto/create-test.dto';

@Controller('test')
export class TestController {

    constructor(private testService: TestService) { }

    @Post()
    async addTest(@Res() res, @Body() createTestDTO: CreateTestDTO) {
        const newTest = await this.testService.addTest(createTestDTO);

        return res.status(HttpStatus.OK).json({
            message: 'Test has been submitted successfully!',
            test: newTest,
        });
    }

    @Get('test/:testID')
    async getTest(@Res() res, @Param('testID', new ValidateObjectId()) testID) {
        const test = await this.testService.getTest(testID);
        if (!test) {
            throw new NotFoundException('Test does not exist!');
        }

        return res.status(HttpStatus.OK).json(test);
    }

    @Get('tests')
    async getTests(@Res() res) {
        const tests = await this.testService.getTests();

        return res.status(HttpStatus.OK).json(tests);
    }

    @Get('names')
    async getTestNames(@Res() res) {
        const testNames = await this.testService.getTestNames();

        return res.status(HttpStatus.OK).json(testNames);
    }

    @Put()
    async editTest(
        @Res() res,
        @Query('testID', new ValidateObjectId()) testID,
        @Body() createTestDTO: CreateTestDTO,
    ) {
        const editedTest = await this.testService.editTest(testID, createTestDTO);

        if (!editedTest) {
            throw new NotFoundException('Test does not exist!');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Test has been successfully updated',
            test: editedTest,
        });
    }

    @Delete()
    async deleteTest(@Res() res, @Query('testID', new ValidateObjectId()) testID) {
        const deletedTest = await this.testService.deleteTest(testID);
        if (!deletedTest) {
            throw new NotFoundException('Test does not exist!');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Test has been deleted!',
            test: deletedTest,
        });
    }
} 