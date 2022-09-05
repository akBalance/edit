<script setup>
import TextBox from './components/TextBox.vue';
import FileTable from './components/FileTable.vue';
import { ref } from 'vue';

import { fileList } from './store/pina.js';
let store = fileList();
let data = ref(store.fileSource);
function add() {
  let file = {
    id: 4,
    title: '标题1',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    count: 0,
    createTime: '',
    changeTime: '',
  };
  store.addFileSource(file);
}
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
    <button @click="add()">增加</button>
  </div>
  <!-- <FileTable /> -->
</template>

<style scoped></style>
