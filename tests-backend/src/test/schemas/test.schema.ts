import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
    name: String,
    secondsForAnswer: Number,
    questions: [
        {
            question: String,
            answer: String
        }
    ]
});