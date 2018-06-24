<template>
  <div id="app">
    <div class="container-fluid">
        <header>
            <div class="my-2 text-center">
                <h2>{{ title }}</h2>
            </div>
        </header>
        
        <main class="mt-5">
            <router-view></router-view>
        </main>
          
      </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  },
  data(){
      return {
          title: 'Quiz Game'
      }
  }
}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700);
@import url(http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700);
@import url(http://fonts.googleapis.com/css?family=Roboto:400,700,400italic,500,500italic,700italic);
@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,400italic,700,700italic);

#app {
  font-family: 'Roboto', 'Roboto Condensed', 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  
}

ul{
    margin: 0;
    padding: 0;
}

ul li{
    list-style: none;
}
</style>
