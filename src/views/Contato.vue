<template>
    <div class="container">
        <h2>Minhas Redes</h2>
        <ul>
            <li><a href="https://www.linkedin.com/in/rafael-carrenho-taranto-87a494231/">LinkedIn</a></li>
            <li><a href="https://github.com/Farrush">GitHub</a></li>
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
        width: 35vw;
        margin-top: 40px;
        margin-left: 10vw;
        font-size: 30px;
        background-color: #EEE9;
        padding: 20px;
        border-radius: 5px;
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

}
</style>