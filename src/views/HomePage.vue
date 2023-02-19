<template>
    <section>
        <div class="container left">
            <p> Olá, sou o Rafael e criei esta página web para divulgar um pouco os meus conhecimentos (E praticar um pouco).</p>
            <p> Estou cursando Análise e Desenvolvimento de Sistemas no período da manhã.</p>
            <p> Sinta-se livre para navegar por aqui :)</p>
        </div>
        <div class="container right">
            <h3>Um pouco sobre mim</h3>
            <p>
                Tenho 18 anos, escuto heavy metal, adoro tudo relacionado ao universo,
                física, ciência, etc. sempre assisto os vídeos de alguns canais no youtube
                como Kurzgesagt in a nutshell e Ciência todo dia.
            </p>
            <p>
                Sou um apreciador da divulgação científica e quem sabe algum dia seja um divulgador.
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomePage"
})
</script>

<style scoped>
    section{
        display: flex;
    }
    .container{
        width: 35vw;
        margin-top: 40px;
        font-size: 25px;
        background-color: #EEE9;
        padding: 20px;
        border-radius: 5px;
        height:fit-content;
    }
    div .left{
        margin-left: 10vw;
        margin-right: 5vw;
    }
    div .right{
        margin-left: 5vw;
        margin-right: 10vw;
    }
</style>
