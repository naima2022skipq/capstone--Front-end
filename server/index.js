import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import Leaderboard from './routes/leaderboard.js';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/leaderboard' ,Leaderboard);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts' ,postRoutes);


const CONNECTION_URL = 'mongodb+srv://naimashaikh550:nimi1234@cluster0.erompz3.mongodb.net/digitalstorybook?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true 
 })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));

//mongoose.set(useFindAndModify, false);
