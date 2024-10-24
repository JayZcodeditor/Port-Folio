// controllers/userController.js

import User from '../models/userModel.js'; // นำเข้าโมเดล User ที่ใช้ในการบันทึกข้อมูล

// ฟังก์ชันสำหรับบันทึกข้อมูลผู้ใช้ใหม่
export const comment = async (req, res) => {
  try {
    const { title, comment, name, gmail } = req.body;

    // ตรวจสอบว่าข้อมูลถูกส่งมาครบหรือไม่
    if (!title || !comment || !name || !gmail) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // สร้างข้อมูลใหม่พร้อม timestamp
    const newUser = new User({
      time_stamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }), // ใช้เวลาแบบประเทศไทย
      title,
      comment,
      name,
      gmail,
    });

    // บันทึกข้อมูลลง MongoDB
    await newUser.save();

    // ส่งการตอบกลับกลับไปยัง client เมื่อบันทึกสำเร็จ
    res.status(201).json({ message: 'Data saved successfully', data: newUser });
  } catch (error) {
    // จับข้อผิดพลาดและส่งข้อความกลับไปยัง client
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
};
