<template>
    <section>
        <div class="container left">
            <h3>Olá 👋</h3>
            <p> Sou o Rafael e criei esta página web para divulgar um pouco os meus conhecimentos (E praticar um pouco).</p>
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
        width: 42vw;
        margin-top: 40px;
        font-size: 25px;
        background: rgb(254,254,254,0.95);
        background: -moz-linear-gradient(0deg, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0.5) 10%, rgba(254,254,254,0.9) 20%, rgba(254,254,254,0.9) 80%, rgba(254,254,254,0.5) 90%, rgba(254,254,254,0.06) 100%);
        background: -webkit-linear-gradient(0deg, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0.5) 10%, rgba(254,254,254,0.9) 20%, rgba(254,254,254,0.9) 80%, rgba(254,254,254,0.5) 90%, rgba(254,254,254,0.06) 100%);
        background: linear-gradient(0deg, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0.5) 10%, rgba(254,254,254,0.9) 20%, rgba(254,254,254,0.9) 80%, rgba(254,254,254,0.5) 90%, rgba(254,254,254,0.06) 100%);
        font-weight: 500;
        padding: 40px 20px;
        height: calc(fit-content+20px);
    }
    div .left{
        margin-left: 10vw;
        margin-right: 5vw;
    }
    div .right{
        margin-left: 5vw;
        margin-right: 10vw;
    }
    @media only screen and (max-width: 600px) {
        section{
        display: block;
    }
    .container{
        width:90vw;
        margin-top: 40px;
        margin-left: 0;
        margin-right: 0;
        font-size: 20px;
        padding: 30px 10px;

    }
    div .left{
        margin-left: 5vw;
        margin-right: 5vw;
    }
    div .right{
        margin-left: 5vw;
        margin-right: 5vw;
    }
}
</style>
