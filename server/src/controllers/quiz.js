const { Quiz, QuizResponse } = require('../models/quiz/model');
const User = require('../models/user/model');

// GET ALL QUIZZES 
exports.getQuizes = async (req, res) => {
    try {
        let quizes = await Quiz.find();
        res.json(quizes);
    }
    catch (err) {
        return res.send(err)
    }
}

// GET SINGLE QUIZ By ID 
exports.getQuiz = async (req, res) => {
    try {
        const { quizId } = req.params
        if (!quizId) return res.status(400).send({ 'error': 'No quizId privided' })

        let quiz = await Quiz
            .findById(quizId)
            .populate('author', 'name email role');
        res.status(201).send(quiz);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ 'error': 'could not find the quiz' });
    }
}

// TODO: ONLY EDUCATOR CAN CREATE THE QUIZ
exports.createQuiz = async (req, res) => {
    try {
        const author = req.profile._id;
        const { title, questions } = req.body;

        const newQuiz = new Quiz({
            title,
            questions,
            author,
            total_score: questions.length
        });
        const savedQuiz = await newQuiz.save()
        res.status(201).send(savedQuiz);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({"error": "Could not create quiz!"})
    }
}

exports.createQuizResponse = async (req, res) => {
    try {
        const userId = req.profile._id;
        const { quiz: quizId, response } = req.body;
        if (!quizId || !response) res.status(400).send({ 'error': 'incorrect body quiz or response missing' });

        const score = await calculateQuizScore(response, quizId);

        const newQuizResponse = new QuizResponse({
            quiz: quizId,
            user: userId,
            response,
            score
        })
        const savedQuizResponse = await newQuizResponse.save()
        
        /*
            UPDATE finance_rating, question_attempted, question_correct, quiz_attempted
            in user profile
        */
        const {error} = await updateUserProfile(quizId, userId, score);
        if(error) throw error;

        res.status(201).send(savedQuizResponse);
    }
    catch (err) {
        console.log(err);
        res.send({ 'error': 'failed to save response' });
    }
}

// GET QUIZ RESPONSE USING quizId and userId
exports.getQuizResponse = async (req, res) => {
    try {
        const userId = req.profile._id;
        const { quiz: quizId } = req.query;

        const quizResponse = await QuizResponse.findOne({ user: userId, quiz: quizId })
        res.status(200).send(quizResponse);
    }
    catch (err) {
        console.log(err);
        res.send({ 'error': 'failed to find response' });
    }
}

// HELPER FUNCTION TO CALCULATE SCORE 
const calculateQuizScore = async (response, quizId) => {
    const { questions } = await Quiz.findById(quizId);
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const { _id, options } = questions[i];
        const { _id: correctOptionId } = options.find(opt => opt.isCorrect === true);

        for (let j = 0; j < response.length; j++) {
            const { questionId, tickedOptionId } = response[j]

            if (_id.toString() === questionId) {
                if (tickedOptionId.toString() == correctOptionId) {
                    score += 1;
                }
            }
        }
    }

    return score;
}

// HELPER FUNCTION TO UPDATE USER PROFILE AFTER QUIZ SUBMISSION
const updateUserProfile = async (quizId, userId, score) => {
    try {
        const { questions } = await Quiz.findById(quizId);
        const user = await User.findById(userId);

        const size = user.finance_rating.length;
        const oldRating = user.finance_rating[size - 1];
        user.finance_rating.push(oldRating + score);
        user.question_attempted += questions.length;
        user.question_correct += score;
        user.quiz_attempted += 1;

        const updatedUserProfile = await user.save();
        console.log('updated', updatedUserProfile)
        return updateUserProfile;
    }
    catch (err) {
        console.log(err);
        return { 'error': 'could not update user profile' };
    }
}