<template>
    <div class="lista">
        <Card v-for="item in tecnologias" :name="item.name" :img="item.img" :key="item.name"/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/LangCard.vue'
import { tecnologias } from '@/assets/listaTec'
export default defineComponent({
    name: "TechPage",
    components:{
        Card
    },
    data(){
        return{
            tecnologias:  tecnologias
        }
    }
})
</script>
<style scoped>
    .lista{
        margin-top: 100px;
        height: 40vh;
        width: 100vw;
        max-width: 100vw;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        background: #FCFCFC66;
    }
</style>