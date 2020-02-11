import { Types } from 'mongoose';

export class CreateScoreDTO {
    readonly testId: Types.ObjectId;
    readonly name: string;
    readonly points: number;
}