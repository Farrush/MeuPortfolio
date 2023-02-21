<template>
    <header>
        <div class="my-info">
            <img src="@/assets/logo.svg"/>
            <div>
                <h2>Rafael Carrenho Taranto</h2>
                <h3>Desenvolvedor de Sistemas</h3>
            </div>
        </div>
        <i class="menu-icon fa-sharp fa-solid fa-bars fa-4x" @click="menuMobileAtivado"></i>
        <nav>
            <router-link to="/" active-class="active">Home</router-link>
            <router-link to="/tech" active-class="active">Tecnologias</router-link>
            <router-link to="/contato" active-class="active">Contato</router-link>
        </nav>
        <ul class="mobile-nav" :class="{'inactive': !menuAtivado,'activated': menuAtivado}">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/tech">Tecnologias</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
        </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent',
    data(){
        return{
            menuAtivado: false
        }
    },
    methods:{
        menuMobileAtivado(){
            this.menuAtivado = !this.menuAtivado
        }
    },
})
</script>

<style scoped>
    nav a, li a{
        text-decoration: none;
        color:#FEFEFE;
        font-size: 1.5rem;
        margin: 0 15px;
        padding: 8px 10px;
        width: 155px;
        text-align: center;
    }
    nav a:hover, .active{
        background-color:#353535;
    }
    nav, header{
        display: flex;
        height: 100px;
    }
    header{
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        background: #9993;
        margin: 0;
    }
    nav{
        justify-content: flex-end;
        align-items: flex-end;
    }
    .my-info{
        display: flex;
        margin: 15px;
        color: #EEE;
    }
    img {
        width: 75px;

    }
    h2, h3{
        margin: 3px 4px;
    }
    li{
        list-style: none;
    }
    .menu-icon{
        display: none;
    }
    .mobile-nav{
        display: none;
    }
    @media only screen and (max-width: 600px) {
    nav{
        display: none;
    }
    .menu-icon{
        display: block;
        margin-right: 10px;
        color: white;
    }
    .my-info{
        display: flex;
        margin: 5px;
        color: #EEE;
        font-size: 0.7rem;
    }
    .inactive{
        display: none;
    }
    .activated{
        display: flex;
    }
    .mobile-nav{

        flex-direction: column;
        position:absolute;
        left: 0;
        width:50vw;
        top: 0;
        background: #2827259b;
        height: 100vh;
    }
    img {
        width: 60px;
    }
    li{

        color:#FEFEFE;

        margin: 5px 3px;
        width: 49vw;
        text-align: center;
        background: #403d3ab7;
    }
    li a{
        font-size: 1.2rem;
    }
    }
</style>
