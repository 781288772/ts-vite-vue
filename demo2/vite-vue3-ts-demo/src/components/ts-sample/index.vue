
<script setup lang="ts">
import {ref} from "vue"

// defineProps({
//     msg:String
// })



// ?号表示非必传
//  defineProps<{msg?:string}>() 


    defineProps<{msg:string}>();
    const username = ref<string>('');
    const emit = defineEmits(['on-update']);
    const handleUpdate = (event:any)=>{
        // username.value = 'hello';
        const {target} = event;
        console.log(target.value);
        emit('on-update',{data:target.value})
        

    }

</script>


<template>
<h1>{{msg}}</h1>
<input v-model="username"  type="text" @blur="handleUpdate($event)">
</template>

