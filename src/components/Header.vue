<template>
    <header>
        <div class="my-info">
            <img src="@/assets/logo.svg"/>
            <div>
                <h2>Rafael Carrenho Taranto</h2>
                <h3>Desenvolvedor de Sistemas</h3>
            </div>
        </div>
        <nav>
            <router-link to="/" active-class="active">Home</router-link>
            <router-link to="/tech" active-class="active">Tecnologias</router-link>
            <router-link to="/contato" active-class="active">Contato</router-link>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent'
})
</script>

<style scoped>
    nav a{
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
        align-items: flex-end;
        width: 100%;
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
</style>
