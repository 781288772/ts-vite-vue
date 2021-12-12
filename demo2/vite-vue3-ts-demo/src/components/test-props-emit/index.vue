<template>
    <p>{{ props.msg }}</p>
    <button @click="handleClick">click me to call the parent commonent's method</button>
    <p>{{ originData.count }} {{ originData.user.name }}</p>
    <button @click="increaseCount">click me to increase the count</button>
</template>


<script setup lang="ts">
import { ref, reactive, watchEffect, watch } from "vue"


const count = ref(0);
// const user = reactive({name:'san Zhang'});
// const arr = reactive([1,2,3,4])

// zong he dingyi

const originData = reactive({
    count: 0,
    user: {
        name: 'san zhang'
    },
    arr: [1, 2, 3, 4]
})
const props = defineProps({
    msg: {
        type: String,
        default: () => 'default value'

    }

})
// 进来就触发
// watchEffect(()=>console.log(originData.count))
// 改变后触发
// watch(count,(n,o)=>console.log(n,o))
// 监听多个变量变化
// watch([count,originData.user],(n,o)=>console.log(n[0],n[1].name))
// 页面加载完就监听
watch([count, originData.user], (n, o) => console.log(n[0], n[1].name), { deep: true, immediate: true })
const increaseCount = () => {
    originData.count++;
    originData.user.name = 'si Li';
    count.value++;
}

const emit = defineEmits(['on-cnahge'])
const handleClick = () => {
    emit("on-change", "parent component's method was called ")
}
const childNode = () => {
    console.log("子组件方法被调用")
    return "子组件方法被调用了"
}
defineExpose({
    child: 'exposed child component',
    childNode
})
</script>