<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDragAndDrop } from 'vue-fluid-dnd'
import Handler from './handler.vue'

const list = ref([1, 2, 3, 4, 5])
const handlerSelector = '.handler'
const { parent } = useDragAndDrop(list, { handlerSelector })

watch(list, (newList, oldList) => {
  console.error('newList, oldList', oldList, newList)
})
</script>

<template>
  <div ref="parent" class="list">
    <div v-for="(item, index) in list" :key="item" :index="index" class="item">
      <Handler class="handler" />
      <span class="other">{{ item }}</span>
      <span @click="list.splice(index, 1)">删除</span>
    </div>
  </div>
</template>

<style scoped lang="css">
.list {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 300px;
  gap: 5px;
}
.item {
  padding: 10px 20px;
  color: #000;
  border: 1px solid #505050;
  display: flex;
  align-items: center;
  gap: 20px;
}
.handler {
  width: 32px;
  height: 32px;
  padding: 3px;
}
</style>
