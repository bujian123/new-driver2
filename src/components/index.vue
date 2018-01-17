<!-- 主界面 -->
<template>
  <div >
      <router-view class="main_body" />
      <mt-tabbar   v-model="selected">
       <mt-tab-item id="tab1">
        <div class="dongtai"></div>
         主页
       </mt-tab-item>
       <mt-tab-item id="tab2">
            <div class="gongzuotai"></div>
         通告
       </mt-tab-item>
       <mt-tab-item id="tab3">
            <div class="wode"></div>
         我的
       </mt-tab-item>
      </mt-tabbar>
  </div> 
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                selected: 'tab1',
            }
        },
        mounted () {
            // this.$router.push({
            //       path: 'home'
            //  })  
        },
        watch: {
            selected(curVal, oldVal) {
                switch (curVal) {
                    case 'tab1':
                        this.$router.push({
                            'path': 'home'
                        })
                        break;
                    case 'tab2':
                        this.$router.push({
                            'path': 'notice'
                        })
                        break;
                    case 'tab3':
                        this.$router.push({
                            'path': 'mine'
                        })
                        break;
                };
            }    
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        list-style-type: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    .main_body {
        position: absolute;
        bottom: 56px;
        top: 1.2rem;
        overflow: auto;
        left: 0;
        right: 0;
        background: #f3f3f3;
        border-bottom: 2px solid #e9e9e9
    }
    
    .mint-tabbar {
        background: #fff;
    }
    
    .mint-tabbar>.mint-tab-item.is-selected {
        background: #ffffff;
    }
    
    .mint-tabbar>.mint-tab-item.is-selected .dongtai {
        background-image: url('../../static/images/tabbar/1.1@2x.png');
    }
    
    .mint-tabbar>.mint-tab-item .dongtai {
        background-image: url('../../static/images/tabbar/1@2x.png');
        background-size: 100% 100%;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 auto 0.2rem;
    }
    
    .mint-tabbar>.mint-tab-item.is-selected .gongzuotai {
        background-image: url('../../static/images/tabbar/2.1@2x.png');
    }
    
    .mint-tabbar>.mint-tab-item .gongzuotai {
        background-image: url('../../static/images/tabbar/2@2x.png');
        background-size: 100% 100%;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 auto 0.2rem;
    }
    
    .mint-tabbar>.mint-tab-item.is-selected .wode {
        background-image: url('../../static/images/tabbar/3.1@2x.png');
    }
    
    .mint-tabbar>.mint-tab-item .wode {
        background-image: url('../../static/images/tabbar/3@2x.png');
        background-size: 100% 100%;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 auto 0.2rem;
    }
</style>