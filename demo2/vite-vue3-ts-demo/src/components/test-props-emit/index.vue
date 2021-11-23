<template>
<p>{{props.msg}}</p>
<button @click="handleClick">click me to call the parent commonent's method</button>
<p>{{originData.count}}  {{originData.user.name}} </p>
<button @click="increaseCount">click me to increase the count</button>
</template>


<script setup lang="ts">
import {ref,reactive} from "vue"

// const count = ref(0);
// const user = reactive({name:'san Zhang'});
// const arr = reactive([1,2,3,4])

// zong he dingyi
const originData = reactive({
    count:0,
    user:{
        name:'san zhang'
    },
    arr:[1,2,3,4]
})
const increaseCount = ()=>{
   originData.count++;
   originData.user.name = 'si Li';
}
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