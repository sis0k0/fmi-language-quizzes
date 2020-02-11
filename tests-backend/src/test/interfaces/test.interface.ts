import { Document } from 'mongoose';

import { Question } from 'src/test/interfaces/question.interface';

export interface Test extends Document {
  readonly name: string;
  readonly secondsForAnswer: string;
  readonly questions: Question[];
}
