<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <img alt="logo" class="logo" src="./assets/main.png" />
  <div class="text">silver-bullet-electron</div>
  <div class="actions">
    <div class="action">
      <a href="https://cn.electron-vite.org/" target="_blank" rel="noreferrer">文档</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">IPC 测试</a>
    </div>
  </div>
</template>
