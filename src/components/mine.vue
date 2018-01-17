<!-- 我的 -->
<template>
    <div>
        <div class="personal flex_wrap">
            <div class="touxiang">
                <img :src=touxiangSrc />
            </div>
            <div class="info">
                <div class="usename">{{UseName}}</div>
                <div class="didian"><i class="weizhi"></i>{{didian}}</div>
            </div>
            <div class="qiandao_wrap">
                <mt-cell style="background: none;"  is-link>
                    <span ><a class="qiandao">每日签到</a></span>
                </mt-cell>
            </div>
        </div>
        <div class="main" >
            <mt-cell title="我的积分" is-link>
                <span>{{jifenNums}}积分</span>
                <img slot="icon" src="../../static/images/mine/4@2x.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="切换校区" is-link>
                <span></span>
                <img slot="icon" src="../../static/images/mine/6@2x.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="修改密码" is-link>
                <span></span>
                <img slot="icon" src="../../static/images/mine/5@2x.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="消息中心" is-link>
                <span class="msgnum">{{msgnums}}</span>
                <img slot="icon" src="../../static/images/mine/9@2x.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="增值服务" is-link>
                <span></span>
                <img slot="icon" src="../../static/images/mine/7@2x.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="设置" is-link>
                <span></span>
                <img slot="icon" src="../../static/images/mine/3@2x.png" width="24" height="24">
            </mt-cell>                                                     
    </div>
    </div> 
</template>

<script>
    export default {
        data() {
            return {
                touxiangSrc: "../../static/images/other/girl.jpg",
                UseName: '彭于晏',
                didian: '思明校区',
                jifenNums: '8',
                msgnums: '2',
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .flex_wrap {
        display: flex;
    }
    
    .touxiang {
        width: 2.3rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
    .touxiang img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 2px solid #5caffa;
    }
    
    .info {
        width: 4rem;
        text-align: left;
    }
    
    .info .didian {
        color: #bad5fb;
        font-size: 0.4rem;
        height: auto;
    }
    
    .info .usename {
        color: #ffffff;
        font-size: 0.5rem;
        padding-top: 0.8rem;
        height: auto;
    }
    
    .qiandao_wrap {
        width: 3rem;
        display: flex;
        align-items: center;
    }
    
    .qiandao {
        background: #ffb31f;
        height: 1rem;
        width: auto;
        padding: 0.22rem 0.2rem;
        border-radius: 0.1rem;
        color: white;
        font-size: 0.2rem;
    }
    
    .weizhi {
        background-image: url("../../static/images/mine/weizhi.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        display: inline-block;
        width: 0.25rem;
        height: 0.35rem;
        margin-right: 0.14rem;
    }
    
    .personal {
        /* background-image: url('../../static/images/mine/personal_bg.jpg'); */
        background-color: #0489ff;
        background-size: 100% 100%;
        height: 2.8rem;
        width: 100%;
        justify-content: space-between;
    }
    
    .personal div {
        height: 100%;
    }
    
    .main {
        text-align: left;
    }
    
    .menu_button {
        width: 2rem;
        height: 2rem;
        border: 1px solid red;
    }
    
    .msgnum {
        display: inline-block;
        height: 0.6rem;
        padding: 0 0.2rem;
        line-height: 0.6rem;
        border-radius: 0.3rem;
        background: #e53623;
        color: #fff;
        text-align: center;
    }
    
    .main .mint-cell {
        border-bottom: 1px solid #dfdfdf;
    }
</style>