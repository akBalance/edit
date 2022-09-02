<script setup>
import { ref } from 'vue';
import ToolTip from './ToolTip.vue';

const props = defineProps({
  key: Number,
  title: String,
  content: String,
  count: Number,
  createTime: String,
  changeTime: String,
});

// function edit(id) {}

// function warnDisabled() {
//   this.disabled = true;
//   setTimeout(() => {
//     this.disabled = false;
//   }, 1500);
// }

// let disabled = ref(false);

let toolTipIsDisplay = ref(false);

function showToolTip() {
  console.log(props.key);
  this.toolTipIsDisplay = !this.toolTipIsDisplay;
}
</script>

<template>
  <div class="container">
    <div class="txt-box">
      <div class="tool" @click="showToolTip()" :key="props.key">...</div>
      <ToolTip :isDisplay="toolTipIsDisplay" />
      <p class="title">{{ title }}</p>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  position: relative;
}
.txt-box {
  width: 140px;
  height: 200px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0 10px 10px 10px;
  text-align: left;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}
.tool {
  width: 100%;
  text-align: right;
  font-size: 30px;
  margin: -10px 0 0 0;
  color: #aaa;
  /* height: 10px; */
}

.shake {
  animation: shake 2s;
}
@keyframes shake {
  10% {
    transform: scale(0.1);
  }
  20% {
    transform: translate(50px, 500px);
  }
}
</style>
