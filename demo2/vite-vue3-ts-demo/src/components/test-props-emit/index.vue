<template>
<p>{{props.msg}}</p>
<button @click="handleClick">click me to call the parent commonent's method</button>
</template>


<script setup lang="ts">
const props = defineProps({
    msg:{
        type:String,
        default:()=>'default value'
    }
   
})
const emit = defineEmits(['on-cnahge'])
 const handleClick = ()=>{
        emit("on-change","parent component's method was called ")
    }
    const childNode = ()=>{
        console.log("child's method was call")
    }
    defineExpose({
        child:'exposed child component',
        childNode
    })
</script>