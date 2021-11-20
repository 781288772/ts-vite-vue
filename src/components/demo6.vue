<template>
 <!-- <div>默认的count:{{state.count}}</div>
 <div>double:{{state.double}}</div>
 <button @click="increment">add</button> -->
 <div>
   <h1>msg</h1>
   <h1>{{num}}</h1>
   <!-- <p>{{state.count}}</p> -->
   <!-- <input type="text" ref="root" value="ref使用例子"> -->
   <!-- {{count}}
   <h1>{{obj.dd}}</h1>
   <h6>toRefs解构reactive:{{dd}}</h6>
    <h2>{{obj.address}}</h2> -->
 </div>
</template>


<script setup lang="ts">
/**
 * 1.不需要手动传入以来
 * 2.不是lazy初始化执行分析依赖
 * 3.无法获取原始值
 * 4.一些异步操作放里面更加合适
 * 5.watch第三个参数处理副作用的第一个参数
 */
import { watch,ref,reactive,computed,defineProps, toRefs,onMounted,watchEffect} from 'vue'
const num = ref(0);
defineProps({
  msg:String
})
onMounted(()=>{
  console.log("onMounted")
});
const stop =  watchEffect((onInvalidate)=>{
  console.log("watchEffed之前调用",num.value);
  onInvalidate(()=>{
    // 清除副作用（某些元素等）

  })
})
setTimeout(() => {
  num.value++;
}, 1000);
// 停用监听
stop()
// const state = reactive({count:0});
// watch(()=>state.count,(count,prevCount)=>{
//   console.log("第一个监听的值",count,prevCount);
// },{
//   deep:true,
//   immediate:true
// })

// setTimeout(() => {
//   state.count++;
// }, 1000);
// const count = ref(1);
// console.log(count.value);
// // 返回一个readonly
// const plusOne = computed(()=>count.value + 1)
// console.log(plusOne.value);

// const root = ref(null);
// // DOM首次渲染完成之后，才能获取到真实DOM
// onMounted(()=>{
//   console.log("熊",root.value);
// })
// ref是一般某个元素 简单数据类型 reactive对象
// const count = ref(0);
// console.log('count',count.value);
// count.value++;
// console.log('count2',count.value);
// // 使用reactive
// const state = reactive({
//   count
// })
// console.log('satte',state.count);
// const obj = reactive({
//   dd:'christina',
//   address:'深圳'
// })
// const {dd}={...toRefs(obj)}
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



<style scoped>
a {
  color: #42b983;
}
</style>
