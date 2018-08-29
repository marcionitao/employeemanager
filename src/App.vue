<template>
  <div id="app">
    <navbar/>
    <!--aqui chamamos a navbar na tela -->
    <div class="conteiner">
      <router-view/>
      <!-- aqui é o resto da aplicação -->
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  // declaramos os componentes
  components: {
    Navbar,
  },
};
</script>
