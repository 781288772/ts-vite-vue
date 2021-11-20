<template>
  <div>
    <h1>{{ theme }}</h1>
  </div>
</template>


<script  lang="ts">
import {defineComponent, inject, Ref, watchEffect, Ref, ref, provide, useSSRContext} from 'vue'
export  default  defineComponent({
  name:'child',
  setup(){
    const {expose}  = useSSRContext();
    const theme = inject("test",'chtistina');
    watchEffect(()=>{
      console.log("主题被修改了",(theme as unknown as Ref <string>).value)
    })
    const themeRef =ref("dark");
    provide("test",themeRef)
    function changeTheme(){
      themeRef.value = Math.random().toString();
    }
    expose(changeTheme)


    return{
      theme
    }

  }
})


</script>


<style scoped>
a {
  color: #42b983;
}
</style>
