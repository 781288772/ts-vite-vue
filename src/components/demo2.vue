<script setup lang="ts">
import { ref,reactive,computed,defineProps, toRefs } from 'vue'
defineProps({
  msg:String
})
// ref是一般某个元素 简单数据类型 reactive对象
const count = ref(0);
console.log('count',count.value);
count.value++;
console.log('count2',count.value);
// 使用reactive
const state = reactive({
  count
})
console.log('satte',state.count);
const obj = reactive({
  dd:'christina',
  address:'深圳'
})
const {dd}={...toRefs(obj)}
// type DState = {
//   count:number;
//   double:number;
// }
// const state:DState = reactive({
//   count:0,
//   double:computed(()=>state.count*2)
// })
// function increment(){
//   state.count++;
// }
</script>

<template>
 <!-- <div>默认的count:{{state.count}}</div>
 <div>double:{{state.double}}</div>
 <button @click="increment">add</button> -->
 <div>
   <h1>msg</h1>
   {{count}}
   <h1>{{obj.dd}}</h1>
   <h6>toRefs解构reactive:{{dd}}</h6>
    <h2>{{obj.address}}</h2>
 </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
