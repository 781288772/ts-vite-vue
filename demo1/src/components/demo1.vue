<script setup lang="ts">
import { ref,reactive,computed } from 'vue'
type DState = {
  count:number;
  double:number;
}
const state:DState = reactive({
  count:0,
  double:computed(()=>state.count*2)
})
function increment(){
  state.count++;
}
</script>

<template>
 <div>默认的count:{{state.count}}</div>
 <div>double:{{state.double}}</div>
 <button @click="increment">add</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
