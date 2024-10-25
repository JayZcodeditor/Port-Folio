import express from 'express';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import flash from 'connect-flash';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import ejs from 'ejs';

// controller
import userRoutes from '../src/routes/userRoutes.js';

// MongoDB connection
mongoose.connect('mongodb+srv://jay:1234@cluster0.88ruy.mongodb.net/Test_data', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.set('view engine', 'ejs');

// Middleware settings
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// CORS middleware configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}));

app.use(expressSession({
  secret: 'nodejsblog',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

global.loggedIn = null;

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

// Routes
app.use('/api', userRoutes);

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


export default app;