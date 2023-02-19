<template>
    <Header/>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
export default defineComponent({
    components:{
        Header
    }
})
</script>
>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-family: 'Open Sans', sans-serif;
    }
    body{
        background-image: url("@/assets/bg.jpg");
        background-repeat: no-repeat;
        background-size: 100vw;
    }
</style>
