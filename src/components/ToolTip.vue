<script setup>
import { ref } from 'vue';
const props = defineProps({
  isDisplay: Boolean,
  // index: Number,
});

function deleteItem() {
  // console.log(props.index);
  this.data = this.data.filter((item) => item.id !== id);
}
</script>

<template>
  <div class="tool-tip" :class="{ hide: !isDisplay }">
    <div>详细信息</div>
    <div @click="deleteItem">删除</div>
  </div>
</template>

<style scoped>
.tool-tip {
  width: 60px;
  height: 80px;
  background-color: #000;
  position: absolute;
  right: 0;
  top: 20px;
  padding: 8px;
}
.tool-tip div {
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-size: 14px;
}
.hide {
  display: none;
}
</style>
