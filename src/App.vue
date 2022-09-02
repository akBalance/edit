<script setup>
import TextBox from './components/TextBox.vue';
import { ref } from 'vue';
let data = ref([
  {
    id: 1,
    title: '标题',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    count: 0,
    createTime: '',
    changeTime: '',
  },

  {
    id: 2,
    title: '标题',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    count: 0,
    createTime: '',
    changeTime: '',
  },

  {
    id: 3,
    title: '标题1',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    count: 0,
    createTime: '',
    changeTime: '',
  },
]);
</script>

<template>
  <div>
    <TextBox
      v-for="item in data"
      :key="item.id"
      :title="item.title"
      :content="item.content"
      :createTime="item.createTime"
      :changeTime="item.changeTime"
    />
  </div>
</template>

<style scoped></style>
