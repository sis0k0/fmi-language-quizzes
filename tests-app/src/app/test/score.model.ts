export class Score {
    testId: string;
    name: string;
    points: number;

    constructor(testId: string, name: string, points: number) {
        this.testId = testId;
        this.name = name;
        this.points = points;
    }
}
