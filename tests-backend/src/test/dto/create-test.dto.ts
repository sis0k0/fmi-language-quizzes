import { Question } from 'src/test/interfaces/question.interface';

export class CreateTestDTO {
    readonly name: string;
    readonly secondsForAnswer: string;
    readonly questions: Question[];
}