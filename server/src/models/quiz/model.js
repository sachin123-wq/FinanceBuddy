const mongoose = require('mongoose');
const { Schema } = mongoose;

// QUIZ SCHEMA 
const quizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: [
        {
            description: String,
            options: [
                {
                    text: {
                        type: String,
                        required: true
                    },
                    isCorrect: {
                        type: Boolean,
                        required: true,
                        default: false
                    }
                }
            ]
        }
    ],
    total_score: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

// QUIZ RESPONSE SCHEMA
const quizResponseSchema = new Schema({
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    response: [
        {
            questionId: Schema.ObjectId,
            tickedOptionId: Schema.ObjectId,
        },
    ],
    score: {
        type: Number,
        default: 0
    }
})

module.exports.Quiz = mongoose.model('Quiz', quizSchema);
module.exports.QuizResponse = mongoose.model('QuizResponse', quizResponseSchema);