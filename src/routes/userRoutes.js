import express from 'express';
import { comment, getcomment, deleteComment, editComment } from '../controller/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is working');
  });

// Route สำหรับบันทึกคอมเมนต์
router.post('/submit-form', comment);

// Route สำหรับดึงคอมเมนต์ทั้งหมด
router.get('/comments', getcomment);

// Route สำหรับลบคอมเมนต์ โดยรับ id ผ่าน URL
router.delete('/comments/:id', deleteComment);

// Route สำหรับแก้ไขคอมเมนต์ โดยรับ id ผ่าน URL
router.put('/comments/:id', editComment);


export default router;
