<template>
  <div>
    <h1>{{ theme }}</h1>
  </div>
</template>


<script  lang="ts">
import { defineComponent,inject,Ref,watchEffect,Ref} from 'vue'
export  default  defineComponent({
  name:'child',
  setup(){
    const theme = inject("test",'chtistina');
    watchEffect(()=>{
      console.log("主题被修改了",(theme as unknown as Ref <string>).value)
    })
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
