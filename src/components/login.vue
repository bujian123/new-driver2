<!-- 登陆 -->
<template>
  <div>
    <img style="width:100%" src="../../static/images/login/loginLogo.png" />
    <form style="margin-top:1rem;padding-left:0.6rem;padding-right:1.25rem;margin-bottom:0.62rem">
      <div class="fomrGroup">
        <img src="../../static/images/login/user.png">
        <mt-field placeholder="请输入用户名" v-model="username"></mt-field>
      </div>
      <div class="fomrGroup">
        <img src="../../static/images/login/user.png">
        <mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
      </div>

    </form>
    <div style="display:flex;justify-content:center">
      <mt-button type="primary" @click='login' size="large" style="margin:0 0.625rem">登录</mt-button>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        let params = {
          username: '12345678908',
          password: '123456'
        }, that = this;

        this.$api.post('/wechat/login', params, function (data) {
          if (JSON.stringify(data.obj)) {
            sessionStorage.setItem('loginData', JSON.stringify(data.obj))
            that.$router.push({
              path: '/home'
            });
          }
        }, function (data) {
          console.log(data.msg)
        })
      }
    }
  }

</script>
<style scoped>
  .fomrGroup {
    display: flex;
    display: -webkit-flex;
    margin-bottom: .1rem;
    align-items: center;
  }

  .fomrGroup img {
    width: 0.75rem;
    height: 0.75rem
  }
</style>