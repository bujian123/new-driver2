<template>
  <div id="app">
    <header>
      <a v-if="isBack" @click="GoBack" class="page-back router-link-active">
        <i class="mintui mintui-back"></i>
      </a>
      <span>{{header}}</span>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    computed: {
      header() {
        return this.$route.meta.header
      },
      isBack() {
        return this.$route.meta.isBack
      }
    },
    mounted() {
      console.log(this.$route);
    },
    watch: {
      $route(curVal, from) {
        this.backSrc = from.path;
      //  if(!sessionStorage.getItem('loginData'))  this.$router.push('/login')
      }
    },
    methods: {
      GoBack: function () {
        if (window.history.length >= 1) {
          this.$router.push('/home')
        } else {
          this.$router.back(-1)
        }
      }
    }
  }

</script>

<style>
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;width: 100%;
  }
*{
  margin: 0;
    padding: 0;
}
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: .3rem;
    height: 100%;width: 100%;
  }

  header {
    background: #0489ff;
    color: white;
    font-size: 0.65rem;
    height: 1.2rem;
    line-height: 1.3rem;
    position: relative;
  }

  .page-back {
    font-size: 0.6rem;
    position: absolute;
    left: 0.4rem;
    text-decoration: none;
    color: black;
  }
a{
  color: inherit;
  text-decoration: none;
}
</style>
