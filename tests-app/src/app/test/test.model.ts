import { Question } from 'src/app/test/question.model';

export class Test {
    id: string;
    name: string;
    secondsForAnswer: number;
    questions: Question[];
}
