<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TestPropsEmit from "./components/test-props-emit/index.vue"
import {ref,onMounted} from "vue";

const msg = ref('welcome to study vite')
const handleChange = (params:string)=>{
  console.log(params)
}

const propsEmitRef = ref();
onMounted(()=>{
  console.log(propsEmitRef.value.child,propsEmitRef.value.childNode())
})
</script>

<template>
  <test-props-emit  ref="propsEmitRef" :msg="msg" @on-change="handleChange" ></test-props-emit>   
</template>
<!--  -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
