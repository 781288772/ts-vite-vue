<template>
  <div>
    <h1>msg</h1>
    <h1>{{ num }}</h1>
    <DemoChld/>
  </div>
</template>


<script setup lang="ts">

import {
  watch,
  ref,
  reactive,
  computed,
  defineProps,
  toRefs,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured, provide,useSSRContext
} from 'vue'
import DemoChld from  "./child.vue"

const num = ref(0);
defineProps({
  msg: String
})

</script>


<style scoped>
a {
  color: #42b983;
}
</style>
