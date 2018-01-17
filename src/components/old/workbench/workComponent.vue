<template>
  <div class="workbench">
    <div class="workHeader">
      <span class="hIcon"></span>
      <span style="font-size:0.4rem">{{workData.title}}</span>
    </div>
    <div class="workContainer">
      <router-link class="ContainerChild" v-for="(item,index) in workData.child" :to="item.href" :key=index>
        <img :src="item.imgSrc" style="width:0.9rem">
        <div>{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: ['workData']
    }
</script>
<style scoped>
    .workbench {
        background: #fff;
        /* padding: 0  0 .5rem 0; */
    }
    
    .hIcon {
        width: 0.2rem;
        height: .5rem;
        background: rgb(4, 137, 255);
        margin: 0 .3rem;
    }
    
    .workHeader {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        height: 1rem;
        padding: 0.1rem .2rem;
        font-weight: bold;
    }
    
    .workContainer {
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
    }
    
    .ContainerChild {
        width: 2.5rem;
        font-size: .3rem;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 0.1rem .3rem;
        box-sizing: border-box;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
</style>