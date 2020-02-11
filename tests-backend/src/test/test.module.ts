import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from 'src/test/test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from 'src/test/schemas/test.schema';
import { ScoreService } from './score/score.service';
import { ScoreController } from './score/score.controller';
import { ScoreSchema } from 'src/test/schemas/score.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }]),
        MongooseModule.forFeature([{ name: 'Score', schema: ScoreSchema }]),
    ],
    providers: [TestService, ScoreService],
    controllers: [TestController, ScoreController]
})
export class TestsModule { }
