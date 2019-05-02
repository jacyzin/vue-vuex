<template>
  <div id="app">

    <div class="jumbotron">
      <h1 class="display-4">Vuex</h1>
      <p class="lead">Padrão de Gerenciamento de Estado Centralizado no Vue.</p>
    </div>

    <div class="container">
    <Contador />

    </div>

  </div>
</template>

<script>
import Contador from '@/components/Contador.vue';

export default {
  name: 'app',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
