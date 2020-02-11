import { Document, Types } from 'mongoose';

export interface Score extends Document {
    readonly testId: Types.ObjectId;
    readonly name: string,
    readonly points: number;
}
