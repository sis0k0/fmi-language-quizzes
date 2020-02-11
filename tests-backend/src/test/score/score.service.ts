import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Score } from 'src/test/interfaces/score.interface';
import { CreateScoreDTO } from 'src/test/dto/create-score.dto';

@Injectable()
export class ScoreService {
    constructor(@InjectModel('Score') private readonly scoreModel: Model<Score>) { }

    async getAll(): Promise<Score[]> {
        const scores = await this.scoreModel.find().exec();

        return scores;
    }

    async findScores(testId): Promise<Score[]> {
        const scores = await this.scoreModel
            .find({ testId })
            .exec();

        return scores;
    }

    async addScore(createScoreDTO: CreateScoreDTO): Promise<Score> {
        const newScore = await this.scoreModel(createScoreDTO);

        return newScore.save();
    }
}
