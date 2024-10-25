<template>
  <div class="contain-fluid">
    <!-- เรียกใช้ Navbar -->
    <Navbar />

    <!-- เนื้อหาของ homepage -->
    <div class="content p-8 contain-fluid">
      <h1 class="text-3xl font-bold">Welcome to the Homepage</h1>
      <p>This is the homepage content.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import Navbar from '../components/Navbar.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    Navbar
  }
})
</script>

<style scoped>
/* ทำให้ Navbar อยู่บนสุดและเต็มจอ */
.contain-fluid {
  /* padding-top: 4rem; ป้องกันไม่ให้เนื้อหาทับกับ Navbar */
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: white;
  /* ปรับสีพื้นหลังตามที่ต้องการ */
  padding: 1rem;
}

.content {
  margin-top: 0rem;
  /* เพิ่มระยะห่างจาก Navbar */
}
</style>
