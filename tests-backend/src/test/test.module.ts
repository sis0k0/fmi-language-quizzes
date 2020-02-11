import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from 'src/test/test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from 'src/test/schemas/test.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }]),
    ],
    providers: [TestService],
    controllers: [TestController]
})
export class TestsModule { }
