import * as mongoose from 'mongoose';

export const ScoreSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    },
    name: String,
    points: Number
});