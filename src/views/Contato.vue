<template>
    <div class="container">
        <h2>Minhas Redes</h2>
        <ul>
            <li><a target="_blank" href="https://www.linkedin.com/in/rafael-carrenho-taranto-87a494231/">LinkedIn</a></li>
            <li><a target="_blank" href="https://github.com/Farrush">GitHub</a></li>
            <li>rcarrenhot@gmail.com</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ContatoPage"
})
</script>

<style scoped>
    .container{
        width: 40vw;
        margin-top: 40px;
        margin-left: 10vw;
        font-size: 30px;
        background: rgb(254,254,254,);
        background: -moz-linear-gradient(0deg, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0.5) 10%, rgba(254,254,254,0.9) 20%, rgba(254,254,254,0.9) 80%, rgba(254,254,254,0.5) 90%, rgba(254,254,254,0.06) 100%);
        background: -webkit-linear-gradient(0deg, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0.5) 10%, rgba(254,254,254,0.9) 20%, rgba(254,254,254,0.9) 80%, rgba(254,254,254,0.5) 90%, rgba(254,254,254,0.06) 100%);
        background: linear-gradient(0deg, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0.5) 10%, rgba(254,254,254,0.9) 20%, rgba(254,254,254,0.9) 80%, rgba(254,254,254,0.5) 90%, rgba(254,254,254,0.06) 100%);
        padding: 30px 40px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    ul li{
        padding: 10px 5px;
        margin: 5px;


    }
    a{
        text-decoration: none;
        color: #000;
    }
    @media only screen and (max-width: 600px) {
        .container{
            width: 90vw;
            margin: 40px auto;
            font-size: 28px;
        }
}
</style>