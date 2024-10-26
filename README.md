## 🌟 โปรเจกต์ Vue 3 + Vite + Tailwind + Vercel + Express + JavaScript + MongoDB

โปรเจกต์นี้ถูกสร้างขึ้นเพื่อทำความเข้าใจการใช้ **Vue 3** ร่วมกับ **MongoDB** รวมถึงการ Deploy บนบริการโฮสต์อย่าง **Vercel** โดยโปรเจกต์นี้สามารถเชื่อมต่อกับ MongoDB ได้สำเร็จและให้ประสบการณ์ที่ราบรื่นจากการพัฒนาไปจนถึงการใช้งานจริง

---

### 🚀 การตั้งค่าโปรเจกต์และการกำหนดค่า

1. **📦 สร้างโปรเจกต์ด้วย Vite**
   - สร้างโปรเจกต์ใหม่ด้วยคำสั่ง:
     ```bash
     npm create vite@latest
     ```
   - เลือก **Vue** เป็นเฟรมเวิร์กในขั้นตอนการตั้งค่า

2. **🎨 ติดตั้ง Tailwind CSS**
   - ติดตั้ง Tailwind CSS โดยใช้คำสั่งเหล่านี้:
     ```bash
     npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
     npx tailwindcss init -p
     ```

3. **🔧 ติดตั้ง Node Modules**
   - หลังจากสร้างโปรเจกต์แล้ว ให้ติดตั้ง Node Modules ที่จำเป็น:
     ```bash
     npm install
     ```

4. **🛠 การตั้งค่า Environment**
   - สร้างไฟล์ environment:
     - `.env` สำหรับการพัฒนาในเครื่อง (local development)
     - `.env.production` สำหรับการใช้งานจริงบน Vercel
   - สร้างไฟล์ `apisetting.js` เพื่อนำตัวแปร environment ไปใช้งานในส่วนของการเรียก API บน frontend

5. **🔄 การตั้งค่า Vercel สำหรับ Deployment**
   - สร้างไฟล์ `vercel.json` เพื่อกำหนดเส้นทาง (routes) และพาธของ API:
     ```json
     {
       "rewrites": [
         { "source": "/api/(.*)", "destination": "/api/index.js" },
         { "source": "/(.*)", "destination": "/index.html" }
       ]
     }
     ```

6. **🗄️ การตั้งค่า MongoDB**
   - สร้างบัญชีใน **MongoDB Atlas** และสร้างฐานข้อมูลบนคลาวด์
   - นำ **MongoDB connection URL** ที่ได้มาใช้ในการตั้งค่า API ในไฟล์ `index.js`

7. **✅ การ Deploy เสร็จสมบูรณ์!**
   - เมื่อทุกอย่างพร้อม คุณสามารถ deploy โปรเจกต์ได้บน **Vercel**

---

### 💡 แนวคิดสำคัญใน Vue 3

โปรเจกต์นี้แยกเส้นทาง (route) ออกเป็นสองส่วนหลัก:

1. **🖥️ เส้นทางของ Frontend**  
   - จัดการในไฟล์ `router.js` โดยกำหนดพาธเช่น `/<path>` เพื่อแสดง component ที่ต้องการ

2. **🔌 เส้นทางของ API**  
   - อยู่ในโฟลเดอร์ `api` โดยมี `index.js` เป็นจุดเริ่มต้นในการเชื่อมต่อ MongoDB และตั้งค่าเส้นทางของ API
   - ประกอบด้วยการตั้งค่าสำหรับ **MongoDB**, **CORS**, **Express**, และการกำหนด **PORT**
   - เส้นทางจะเรียกฟังก์ชัน backend ผ่าน `userRoute` เพื่อทำงานกับ MongoDB

---

### 🌍 การ Deploy ด้วย Vercel

- Vercel จะเชื่อมต่อกับ Repository ของคุณโดยอัตโนมัติและ deploy โปรเจกต์ Vue ให้
- กระบวนการ build ถูกกำหนดไว้ใน `package.json`:
  ```json
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite",
    "build": "vite build"
  }

# Languages and Tools: 🛠
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" width="42"
    alt="javascript logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" width="42"
    alt="html5 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" width="42"
    alt="css3 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" width="42"
    alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="30" width="42"
    alt="bootstrap logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" height="30" 
    alt="git logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="30" width="42"
    alt="vscode logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" width="42"
    alt="git logo" />
<img src="https://motiongraphicplus.com/wp-content/uploads/2023/09/chat-gpt-logo-png.png" height="30" 
    alt="ChatGPT logo" />