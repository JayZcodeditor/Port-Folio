import express from 'express';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import flash from 'connect-flash';
import fileUpload from 'express-fileupload';
import cors from 'cors'; // นำเข้า CORS
import ejs from 'ejs';

// controller
import { comment } from './src/controller/userController.js'; // นำเข้าฟังก์ชัน createUser จาก userController

// MongoDB connection
mongoose.connect('mongodb+srv://jay:1234@cluster0.88ruy.mongodb.net/Test_data', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.set('view engine', 'ejs');

// Middleware settings
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// เพิ่มการใช้งาน CORS
app.use(cors({
  origin: 'http://localhost:5173', // อนุญาตให้เชื่อมต่อจาก frontend ที่รันอยู่ที่พอร์ต 5173
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
})

  
// Route สำหรับ submit ฟอร์ม
app.post('/api/submit-form', comment); // เรียกฟังก์ชัน createUser เมื่อ POST มาที่ /api/submit-form


// Start server
let port = process.env.PORT;
if (port == null || port === "") {
    port = 4000;
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
