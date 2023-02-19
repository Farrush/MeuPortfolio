<template>
    <div class="card">
        <img height="210" :src="img"/>
        <span>{{ name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LangCard',
    props:{
        name:{
            type: String
        },
        img:{
            type: String
        }
    }
})
</script>
<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px 20px;
    }
</style>
