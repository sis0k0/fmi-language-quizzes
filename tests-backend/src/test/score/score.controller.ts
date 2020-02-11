import { Controller, Get, Res, Param, HttpStatus, Post, Body } from '@nestjs/common';
import { ScoreService } from 'src/test/score/score.service';
import { ValidateObjectId } from 'src/test/shared/pipes/validate-object-id.pipes';
import { CreateScoreDTO } from 'src/test/dto/create-score.dto';

@Controller('scores')
export class ScoreController {

    constructor(private scoreService: ScoreService) { }

    @Get('')
    async getScores(@Res() res) {
        const tests = await this.scoreService.getAll();

        return res.status(HttpStatus.OK).json(tests);
    }

    @Get('/:testId')
    async getScoresByTestId(@Res() res, @Param('testId', new ValidateObjectId()) testId) {
        const scores = await this.scoreService.findScores(testId);

        return res.status(HttpStatus.OK).json(scores);
    }

    @Post('')
    async addPost(@Res() res, @Body() createScoreDTO: CreateScoreDTO) {
        const newScore = await this.scoreService.addScore(createScoreDTO);

        return res.status(HttpStatus.OK).json({
            message: 'Score has been submitted successfully!',
            score: newScore,
        });
    }

}
