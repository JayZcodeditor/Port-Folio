<script setup lang="ts">
import { Analytics } from '@vercel/analytics/react';
// ไม่จำเป็นต้อง import Homepage เพราะเนื้อหาจะถูกแสดงผ่าน router-view
</script>

<template>
  <!-- router-view จะแสดงเนื้อหาของแต่ละ route -->
  <router-view />
  <Analytics />
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: #42b883;
}

a.router-link-active {
  font-weight: bold;
  color: #35495e;
}
</style>
