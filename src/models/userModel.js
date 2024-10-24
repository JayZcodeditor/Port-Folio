// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  time_stamp: { type: String, required: true }, // เก็บเวลาที่สร้าง
  title: { type: String, required: true },      // ชื่อเรื่องหรือหัวข้อ
  comment: { type: String, required: true },    // ความคิดเห็น
  name: { type: String, required: true },       // ชื่อของผู้ใช้
  gmail: { type: String, required: true }       // Gmail ของผู้ใช้
});

// สร้างโมเดล
const User = mongoose.model('User', userSchema, 'test_data');
export default User;
