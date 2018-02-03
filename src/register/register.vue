<template>
   <div class="loginView">
      <headerView></headerView>
      <!-- 注册信息*****************************************************************************-->
     <div class="page-wrap">
            <div class="w">
                <div class="user-con">
                    <div class="user-title">用户注册</div>
                    <div class="user-box">
                        <div class="error-item">
                            
                            <p class="err-msg">{{ErrorTip}}</p>
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="username" >
                               用户名
                            </label>
                            <input v-model="username" class="user-content" id="username" placeholder="请输入用户名" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="password">
                                密码
                            </label>
                            <input v-model="password" type="password" class="user-content" id="password" placeholder="请输入密码" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="password-confirm">
                               确认密码
                            </label>
                            <input v-model="repassword" type="password" class="user-content" id="password-confirm" placeholder="请再次输入密码" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="phone">
                               手机号
                            </label>
                            <input v-model="phone" class="user-content" id="phone" placeholder="请输入手机号" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="email">
                               邮箱
                            </label>
                            <input v-model="email" class="user-content" id="email" placeholder="请输入邮箱" autocomplete="off">
                        </div>
                        
                       
                        <a class="btn btn-submit" id="submit" @click="zuce">{{registxt}}</a>
                        <div class="link-item">
                            <a class="link" @click="toLogin">已有帐号，去登录>></a>
                        </div>
                    </div>  
                </div>                
            </div>
        </div>
      <bottomView></bottomView>
   </div>

</template>

<script scope>
import headerView from '../components/header-simple.vue'
import bottomView from '../components/bottom.vue'
export default{
components:{
   headerView,
   bottomView
},
data(){
   return{
        username:'',//用户名
        password:'',//密码
        repassword:'',//再次确认密码
        phone:'',//电话号码
        email:'',//邮箱
        ErrorTip:'',//错误提示
        registxt:'立即注册',//注册的提示
   }
},
updated(){
 
   //当ErrorTip有值的时候才会显示
    if (this.ErrorTip!='')
    {$('.user-con .user-box .error-item').css({
        display: 'block'
    });
    }
},
methods:{
    zuce(){
      var _this=this
      _this.registxt='注册中...'
      let userName=_this.username
      let userPwd=_this.password
      let userPwd2=_this.repassword
      let phone=_this.phone
      let email=_this.email 
      
      if (!userName||!userPwd||!userPwd2) {

        _this.ErrorTip="账号密码不能为空"
        _this.registxt="立即注册"
        return false
      }
      if (userPwd!=userPwd2) {
        _this.ErrorTip="两次输入的密码不一致"
        _this.registxt="立即注册"
        return false
      }
      if (!(/^1[34578]\d{9}$/.test(phone))) {
        _this.ErrorTip="手机号格式不正确"
        _this.registxt="立即注册"
        return false
      }
      if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
        _this.ErrorTip="邮箱格式不正确"
        _this.registxt="立即注册"
        return false
      }
        
        this.$http.post(IP+'/bonsai/user/create',{
                  'username':_this.username,
                  'cnname':'sx',
                  'address':'',
                  'email':_this.email,
                  'flagrole':'user',
                  'headurl':'',
                  'mobile':_this.mobile,
                  'password':_this.password,
                  'state':'login',  
        }, {
          
          'headers': {
            'Content-Type': 'application/json',
        }
        })
        .then((response)=>{
          
            if (response.body.code == '05') {
                alert("用户已存在,请直接登录")
                 _this.registxt="用户已存在"
                 _this.toLogin()
            }
            else if (response.body.code == '00') {
                alert("恭喜您，注册成功")
                 _this.registxt="注册成功"
                 _this.toLogin()
            }
        })
        .catch(function(){
          alert("出错啦")
        })
},
  toLogin(){
     this.$router.push({path:'/'})
  }
}
}      
</script>
<style scoped>
 /* 最外层容器 */
.page-wrap{
    padding: 40px 0;
    background: #238e68;
}
/* 表单框 */
.user-con{
    position: relative;
    margin: 0 auto;
    width: 400px;
    background: #fff;
}
.user-con .user-title{
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-weight: bold;
    color: #666;
}
.user-con .user-box{

    padding: 20px;
}
/* 错误提示框 */
.user-con .user-box .error-item{
  
 position: relative;
    padding: 4px 0 4px 10px;
    margin-bottom: 10px;
    border: 1px solid red;
    color: red;
    background: #fde9e9;
   display: none;
}


.user-con .user-item{
    position: relative;
    margin-bottom: 20px;
}
.user-con .user-item .user-label{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 80px;
    line-height: 40px;
    padding: 0;
    margin:0;
    font-size: 18px;
    color: #666;
    text-align: center;
    border-right: 1px solid #bdbdbd;
}
.user-con .user-item .user-content{
    padding: 10px 0 10px 80px;
    width: 359px;
    height: 40px;
    line-height: 18px;
    font-size: 15px;
    border: 1px solid #bdbdbd;
    outline: none;
}
.user-con .btn-submit{
    width: 100%;
    padding: 2px 0;
    text-align: center;
    font-size: 20px;
    background-color: #238e68;
}

/* 跳转链接 */
.user-con .link-item{
    text-align: right;
    margin-top: 10px;
}
.user-con .link-item .link{
    margin-left: 10px;
    color: #999;
}
</style>
