<template>
    <header>
        <div class="my-info">
            <img src="@/assets/logo.svg" >
            <div>
                <h2>Rafael Carrenho Taranto</h2>
                <h3>Desenvolvedor de Sistemas</h3>
            </div>
        </div>
        <nav>
            <router-link to="/" active-class="active">Home</router-link>
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
        color:#333;
        font-size: 1.5rem;
        margin: 0 15px;
        padding: 8px 10px;
        width: 90px;
        text-align: center;
    }
    nav a:hover, .active{
        background-color:#444;
        color: #FEFEFE;
    }
    nav, header{
        display: flex;
        height: 75px;
    }
    header{
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 70px;
    }
    nav{
        justify-content: flex-end;
        align-items: flex-end;
    }
    .my-info{
        display: flex;
    }
    img{
        width: 75px;
    }
    h2, h3{
        margin: 3px 4px;
    }
</style>
