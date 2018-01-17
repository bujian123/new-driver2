<!-- 主页 -->
<template>
    <div>
        <div style="font-size:0">
            <img src="../../static/images/home/tmsLogo.jpg" width="100%">
        </div>
        <div class="buttons">
            <div >
               <router-link to="/operations" class="homeButton">
                <img style="height:1.4375rem" src="../../static/images/home/dispatch-order.png">            
                    业务操作
                </router-link>
            </div>
            <div >
                <router-link to="/operations" class="homeButton" >
                <img style="height:1.5625rem"  src="../../static/images/home/cost.png">       
                    费用报销
                </router-link>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            console.log(this.$router)
        },
        created() {


        },
    }
</script>
<style scoped>
    .buttons{
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        padding: .71rem 0.5rem;
        font-size: .5rem;
        font-weight: bold
    }
.homeButton{
    width:4rem;
    display: -webkit-flex;
    display: flex;
    align-items: center
}
.homeButton img{
    /* width:1.8rem;  */
  
}
</style>