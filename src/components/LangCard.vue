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
        padding: 5px 15px;
        margin: 0 10px;
        cursor: pointer;
    }
    .card:hover{
        scale: calc(1.05);
    }
    span{
        margin-top: 8px;
        font-weight: 900;
    }
    @media only screen and (max-width: 600px) {

}
</style>
