require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const quizResponseRoutes = require('./routes/quizResponse');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch(console.log('DB GOT OOOPPSSSS!!!!'));

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.get('/', (req, res) => {
  res.send('Welcome to Finance World!');
});
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/quiz_response', quizResponseRoutes);

// PORT
const port = process.env.PORT || 8000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
