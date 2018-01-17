<!-- 通告 -->
<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">未读</mt-tab-item>
            <mt-tab-item id="2">已读</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul>
                    <li class="msgWrap" v-for="(item,index) in msgList" v-if='(!item.status)' @click='showMsg(index)'>
                        <div class="left">
                            <h5>{{item.title}}</h5>
                            <p>{{item.content}}</p>
                        </div>
                        <div class="right">{{item.create_time}}</div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul>
                    <li class="msgWrap" v-for="(item,index) in msgList" v-if='(item.status)'  @click='showMsg(index)'>
                        <div class="left">
                            <h5>{{item.title}}</h5>
                            <p>{{item.content}}</p>
                        </div>
                        <div class="right">{{item.create_time}}</div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-popup class="msgPopup"
        v-model="popupVisible"
        >
        <h5 >{{msgObj.title}}</h5>
        <div class="time">{{msgObj.create_time}}</div>
        <div class="content">{{msgObj.content}}</div>
        </mt-popup>
    </div>
</template>
<script>
    // import { Popup } from 'mint-ui';
    export default {
        data() {
            return {
                popupVisible:false,
                selected: '1',
                msgObj:{},
                msgList: [
                    { id: '1', title: '没看过', content: '这是内容这是内容', create_time: '2018-1-15 20:33:01', status: 0 }
                    , { id: '2', title: '这是title', content: '这是内容这是内容', create_time: '2018-1-15 20:33:01', status: 0 },
                    { id: '4', title: '看过了', content: '这是内容这是内容', create_time: '2018-1-15 20:33:01', status: 1 }
                    , { id: '5', title: '这是title', content: '这是内容这是内容', create_time: '2018-1-15 20:33:01', status: 1 }],
            }
        },
        created () {
                console.log(JSON.parse(sessionStorage.getItem('loginData')));
                var use_obj = JSON.parse(sessionStorage.getItem('loginData'));
            var params = {
                receiver:use_obj.user_id,
                company_id:1,
                page_no:1,
                page_size:10,
                status:0,
            };
            this.$api.post('/wechat/queryMessage', params, function (data) {
       console.log('data',data);
        })  
        },
        methods: {
            showMsg: function (index) {
                this.msgObj = this.msgList[index];
                this.popupVisible = true;
                if (!this.msgList[index].status) {
                    this.msgList[index].status = 1;
                };
                var params = {
                    id:this.msgList[index].id
                }
                return;//用真数据后取消注释
                this.$api.post('/api/message/csMessage/readMessage', params, function (data) {
       console.log('data',data);
        })  
                
            }
        },
    }
</script>
<style>
    .mint-navbar {
        font-weight: bold;
    }

    ul {
        margin: 0.1rem 0 0;
        padding: 0
    }

    .msgWrap {
        list-style: none;
        display: flex;
        font-size: 0.3rem;
        padding: 0.3rem 0.2rem;
        height: 2.2rem;
        background: white;
        margin-bottom: 0.13rem;
    }

    .msgWrap .left {
        width: 7.7rem;
        text-align: left;
    }

    .msgWrap .left h5 {
        font-size: 0.6rem;
        margin: 0.1rem 0;
    }

    .msgWrap .left p {
        font-size: 0.3rem;
        margin: 0;
        text-overflow: ellipsis;
        height: 1.2rem;
        overflow: hidden;
        line-height: 0.6rem;
    }

    .msgWrap .right {
        width: 2.2rem;
        font-size: 0.2rem;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .msgPopup{
        border-radius: 0.2rem;
        height: 10rem;overflow: auto;
        padding: 0.1rem 0.2rem;
    }
    .msgPopup h5{
        margin: 0.15rem 0;
        width: 8rem;font-weight: 100;
        font-size: 0.5rem;
    }
    .msgPopup .time{
        font-size: 0.3rem ;
        text-align: left;
        margin: 0.1rem 0;
    }
    .msgPopup .content{
        font-size: 0.3rem;
        text-align: left;
    }
</style>