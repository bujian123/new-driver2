<template style="height:100%;">
    <div class="wrap">
        <div class="head">
            <div class="top">
                <div class="dispatch_no">{{detail.dispatch_no}}</div>
                <div class="status">{{detail.dispatch_status}}</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                selected: 'tab1',
                detail: {},
            }
        },
        mounted() {
            // this.$router.push({
            //       path: 'home'
            //  })  
        },
        watch: {

        },
        created() {
            var params = {
                dispatch_no: 'DO2017102600001',
                company_id: null,
            }
            var that = this;
            this.$api.post('/wechat/getDispatchOrderByNo', params, function (data) {
                that.detail = data.obj;
            })
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

    .wrap {
        background: #0489ff;height: 18rem;padding: 0.2rem;
    }

    .top {
        display: flex;
        border-bottom: 2px solid white;padding-bottom: 0.1rem;
    }

    .top .dispatch_no {
        color: white;
        font-size: 0.4rem;
        height: 0.6rem ;line-height: 0.6rem;
        margin-left: 0.4rem;
    }
    .top .status{
        background: white;
        color:#0489ff;padding: 0.1rem;border-radius: 0.1rem;margin-left: 0.4rem;
    }
</style>