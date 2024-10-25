import express from 'express';
import { comment, getcomment } from '../controller/userController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is working');
  });

// Route สำหรับบันทึกคอมเมนต์
router.post('/submit-form', comment);

// Route สำหรับดึงคอมเมนต์ทั้งหมด
router.get('/comments', getcomment);

export default router;
