<template>
    <div class="corpo-pagina">
        <div class="lista">
            <Card v-for="item in tecnologias" :name="item.name" :img="item.img"
             :key="item.name" @click="selecionaCard(item.name)"/>
        </div>
        <div class="container" v-if="techSelecionado">
            <h1>{{ info[0].id }}</h1>
            <span class="tempo">Tempo de experiência: {{ info[0].tempo }}</span>
            <p class="desc">{{ info[0].desc }}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Card from '@/components/LangCard.vue'
import { tecnologias } from '@/assets/listaTec'
import { informacoes } from '@/assets/infoTec'
export default defineComponent({
    name: "TechPage",
    components:{
        Card
    },
    data(){
        return{
            tecnologias:  tecnologias,
        }
    },
    setup(){
        const techSelecionado = ref("");
        const info = computed(() =>informacoes.filter(i => i.id == techSelecionado.value))
        return{
            techSelecionado,
            info
        }
    },
    methods:{
        selecionaCard(nome: string){
            this.techSelecionado = nome
        }
    }
})
</script>
<style scoped>
    .corpo-pagina{
        height: 85vh;
        max-height: 85vh;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .lista{
        margin-top: 40px;
        margin-bottom: 20px;
        padding: 30px 0;
        height: fit-content;
        width: 100vw;
        max-width: 100vw;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        background: #FCFCFC66;
    }
    .container{
        background: #FEFEFEAA;
        height: fit-content;
        width: 90vw;
        padding: 10px;
        border-radius: 10px;
        margin: 0 auto;
    }
    .container h1{
        text-align: center;
    }
    .tempo{
        font-size: 1.3rem;

    }
    .desc{
        width: 70vw;
        font-size: 1.2rem;
    }
</style>