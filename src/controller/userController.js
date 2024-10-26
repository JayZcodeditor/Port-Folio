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
// ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้ทั้งหมดจาก MongoDB
export const getcomment = async (req, res) => {
  try {
    // ดึงข้อมูลจาก MongoDB และเรียงตาม _id ให้ข้อมูลล่าสุดมาเป็นอันดับแรก
    const users = await User.find().sort({ _id: -1 });  // -1 หมายถึงการเรียงลำดับจากมากไปน้อย (ล่าสุด -> เก่าสุด)
    
    // ส่งข้อมูลกลับไปยัง client
    res.status(200).json({ data: users });
  } catch (error) {
    // จัดการข้อผิดพลาดหากไม่สามารถดึงข้อมูลได้
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};
// ฟังก์ชันสำหรับลบข้อมูลผู้ใช้
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    // ตรวจสอบว่า id ถูกส่งมาหรือไม่
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    // ลบข้อมูลใน MongoDB โดยค้นหาตาม id
    const deletedUser = await User.findByIdAndDelete(id);

    // ตรวจสอบว่ามีข้อมูลที่ถูกลบหรือไม่
    if (!deletedUser) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // ส่งการตอบกลับกลับไปยัง client เมื่อการลบสำเร็จ
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    // จับข้อผิดพลาดและส่งข้อความกลับไปยัง client
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Error deleting comment', error: error.message });
  }
};
// ฟังก์ชันสำหรับแก้ไขข้อมูลคอมเมนต์
export const editComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, comment, name, gmail } = req.body;

    // ตรวจสอบว่าข้อมูลที่ต้องการแก้ไขถูกส่งมาครบหรือไม่
    if (!title || !comment || !name || !gmail) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // ค้นหาและอัปเดตข้อมูลใน MongoDB
    const updatedComment = await User.findByIdAndUpdate(
      id,
      {
        title,
        comment,
        name,
        gmail,
      },
      { new: true } // เพื่อให้ส่งข้อมูลที่อัปเดตล่าสุดกลับมา
    );

    // ตรวจสอบว่าพบคอมเมนต์ที่ต้องการแก้ไขหรือไม่
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // ส่งการตอบกลับกลับไปยัง client เมื่อการอัปเดตสำเร็จ
    res.status(200).json({ message: 'Comment updated successfully', data: updatedComment });
  } catch (error) {
    // จับข้อผิดพลาดและส่งข้อความกลับไปยัง client
    console.error('Error updating comment:', error);
    res.status(500).json({ message: 'Error updating comment', error: error.message });
  }
};