<script setup>
import { ref } from 'vue';
const props = defineProps({});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>字数</th>
          <th>创建时间</th>
          <th>修改时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>1000</td>
          <td>2022-11-03</td>
          <td>2045-34-23</td>
          <td>删除 生成副本</td>
        </tr>

        <tr>
          <td>test</td>
          <td>1000</td>
          <td>2022-11-03</td>
          <td>2045-34-23</td>
          <td>删除 生成副本</td>
        </tr>

        <tr>
          <td>test</td>
          <td>1000</td>
          <td>2022-11-03</td>
          <td>2045-34-23</td>
          <td>删除 生成副本</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td,
th {
  padding: 4px 20px;
}
/* tr {
  border-bottom: 10px solid #000;
} */
thead {
  border-bottom: 10px solid #000;
}
</style>
