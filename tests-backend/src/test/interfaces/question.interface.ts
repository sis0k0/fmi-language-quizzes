import { Document } from 'mongoose';

export interface Question extends Document {
  readonly question: string;
  readonly answer: string;
}
