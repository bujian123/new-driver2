<!-- 业务操作 -->
<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待执行</mt-tab-item>
            <mt-tab-item id="2">执行中</mt-tab-item>
            <mt-tab-item id="3">已完成</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div v-for='(item,index) in unfinshData.data' style="text-align: left; padding: 0.375rem 0.3125rem 0 0.3125rem;">
                    <div class="orderTop" >
                        <p style="font-weight: bold;font-size: .4rem;text-align: left;">{{item.dispatch_no}}</p>
                        <p>
                            <span style="font-weight:bold">{{item.customer_name}}</span>
                            <span style="padding-left:2.625rem">{{item.require_time_to}}</span>
                        </p>
                        <p>{{item.shipper_city}}-{{item.consignee_city}}
                            <span style="padding-left:2.625rem">计划量：
                                <span style="color:red">{{item.plan_amount}}</span>
                            </span>
                        </p>
                    </div>
                    <div  class="orderCenter" >
                        <img style=" height: 0.8435rem;margin-right:0.375rem;" src="../../../static/images/home/shipper.png">
                        <div>
                            <p>
                                <span style="padding-right:.2rem">{{item.shipper_city}}</span>
                                <span style="padding-right:.3rem">{{item.shipper_county}}</span>
                                <span>{{item.shipper_address}}</span>
                            </p>
                            <p style="color:#9E9E9E">
                                要求
                                <span style="padding:0.2rem;font-size:.4rem;color:#000">{{item.require_time_from}}</span>
                                抵达
                            </p>
                        </div>
                    </div>
                    <div class="orderBottom" >
                        <img  style=" height: 0.625rem;margin-right:0.375rem;" src="../../../static/images/home/remark.png">
                        <div style="width:7.53125rem">                 
                            <div>
                                <p>装货前需要清罐
                                    <span v-if='item.is_clean_pot == 0' style="font-size:.4rem;color:rgb(255, 165, 0)">待清灌</span>
                                    <span v-if='item.is_clean_pot == 1' style="font-size:.4rem;color:rgb(255, 165, 0)">已清灌</span>
                                </p>
                                <p>已抵达
                                    <span>{{item.time_diff}}小时，请尽快执行</span>
                                </p>
                            </div>
                        </div>
                        <mt-button type="primary"  style="width: 1.75rem; height: 1.75rem;">发车<br>确认</mt-button>
                    </div>
                </div>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: '1',
                unfinshData: {
                    pageSize: 10,
                    pageNo: 1,
                    timeFrom: '2017-12-19',
                    timeTo: '2017-01-15',
                    data: []
                },
                doingData: {
                    pageSize: 1,
                },
                finshedData: {
                    pageSize: 1,
                }
            }
        },
        mounted() {
            this.unfinished();
        },
        methods: {
            unfinished() {
                let that = this,
                    parms = {
                        page_size: this.unfinshData.pageSize,
                        page_no: this.unfinshData.pageNo,
                        // create_time_from:this.unfinshData.timeFrom,
                        // create_time_to:this.unfinshData.timeTo
                    };
                this.$api.post('/wechat/pendingDispatchOrder', parms, function (data) {
                    that.unfinshData.data = data.obj.list;
                    console.log(that.unfinshData.data)
                }, function (error) {
                    alert(error.msg)
                })
            }
        }
    }
</script>
<style scoped>
    .orderTop{
        border-bottom:1px solid #ccc;padding:0.4375rem 0
    }
    .orderCenter{
       display:flex;padding:0.4375rem 0;border-bottom:1px solid #ccc
    }
    .orderBottom{
        display:flex;padding:0.4375rem 0;border-bottom:1px solid #ccc
    }
    p{
        margin: .2rem 0;
    }
</style>