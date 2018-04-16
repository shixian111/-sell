<template>
	<div class="loginView">
		<headerView></headerView>
		<!-- 登录信息*****************************************************************************-->
     <div class="page-wrap">
            <div class="w">
                <div class="user-con">
                    <div class="user-title">用户登录</div>
                    <div class="user-box">
                        <div class="error-item">
                           
                            <p class="err-msg">{{ErrorTip}}</p>
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="">
                                用户名
                            </label>
                            <input v-model="username" class="user-content" id="username" placeholder="请输入用户名" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="password">
                                密码
                            </label>
                            <input v-model="password"  type="password" class="user-content" id="password" placeholder="请输入密码" autocomplete="off">
                        </div>
                        <div class="user-item">
                             <label class="user-label">
                                验证码
                            </label>
                            <input type="text" placeholder="请输入验证码" v-on:keyup.13="login" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
                            <input type="button" id="code" @click="createCode" class="verification1" v-model="checkCode"/>

                        </div>
                        <a class="btn btn-submit" id="submit" @click="login" >{{registxt}}</a>
                        <div class="link-item">
                            <!-- <a class="link" href="./user-pass-reset.html" target="_blank" >忘记密码</a> -->
                            <router-link to='/register'><a class="link" href="./user-register.html" target="_blank">免费注册</a></router-link>
                        </div>
                    </div>  
                </div>                
            </div>
        </div>
		<bottomView></bottomView>
	</div>

</template>

<script scope>
var code;//在全局定义验证码
import headerView from '../components/header-simple.vue'
import bottomView from '../components/bottom.vue'
export default{
components:{
	headerView,
	bottomView
},
data(){
	return{
        username:'',
        password:'',
         ErrorTip:'',//错误提示
        registxt:'立即登录',//登录的提示
        picLyanzhengma:'',//验证码
        checkCode:'',//图片验证码
	}
},
created(){
    this.createCode()
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
  login(){
         var _this=this
      _this.registxt='登录中...'
      let userName=_this.username
      let userPwd=_this.password
      if (!userName||!userPwd) {

        _this.ErrorTip="账号密码不能为空"
        _this.registxt="立即登录"
        return false
      }
         this.$http.post(IP+'/bonsai/user/login',{
                  'username':_this.username,
                  'password':_this.password,       
        },{
          
          'headers': {
            'Content-Type': 'application/json',
        }
        })
        .then((response)=>{
          if (response.body.code == '00') {

               if (response.body.data!=null&&_this.picLyanzhengma!='') 
               {
                alert("恭喜您，登录成功")
                _this.registxt="登录成功"
                var flagrole=response.body.data.flagrole
                var userid=response.body.data.id
                
                this.$store.commit('setRole', flagrole)
                this.$store.commit('setuserid', userid)
                
               // console.log(this.$store.state.currentdata.UserId)
                if (flagrole=="buyer") {this.$router.push({path:'/nav/index'})}
                else if (flagrole=="seller") {this.$router.push({path:'/mg/Home'})}
                else if (flagrole=="admin") {this.$router.push({path:'/mg/Home'})}
              }
                else if(this.picLyanzhengma==''){
                    _this.ErrorTip="验证码不能为空"
                    _this.registxt="登录"
                }
                else{
                    alert("用户名或密码不存在")
                     _this.registxt="登录"
                }
            }
            
        })
        .catch(function(){
          alert("出错啦")
        })
    
},
// 图片验证码
createCode(){
  code = ""; 
  var codeLength = 4;//验证码的长度 
  var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
     'S','T','U','V','W','X','Y','Z');//随机数 
  for(var i = 0; i < codeLength; i++) {
   //循环操作 
   var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35） 
   code += random[index];//根据索引取得随机数加到code上 
  } 
  this.checkCode = code;//把code值赋给验证码 
},
// 失焦验证图和密码
checkLpicma(){   
    var _this=this
  this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写   
  if(_this.picLyanzhengma == '') {
   //代码是直接复制项目内容，这里选择器选择时 请根据自己的需求来实现提示语效果，很简单，我懒，就不改了 ~
   _this.ErrorTip="请输入验证码"
   _this.registxt="登录"
    
  }else if(_this.picLyanzhengma.toUpperCase() != _this.checkCode ) { 
   //若输入的验证码与产生的验证码不一致时 
   console.log( this.picLyanzhengma.toUpperCase())
   //代码是直接复制项目内容，这里选择器选择时 请根据自己的需求来实现提示语效果，很简单，我懒，就不改了 ~  
   _this.ErrorTip="验证码不正确"
   _this.registxt="登录"
   this.createCode();//刷新验证码 
   _this.picLyanzhengma = '';
  }else {
   //输入正确时 
   //代码是直接复制项目内容，这里选择器选择时 请根据自己的需求来实现提示语效果，很简单，我懒，就不改了 ~  
   
   return true;
  } 
}

  }   }   
</script>
<style scoped>
 /* 最外层容器 */
.page-wrap{
    padding: 90px 0;
    background: url('../assets/images/login/bg.jpg') no-repeat ; height:500px; width:1360px;
   
}
/*填验证码的input*/
.yanzhengma_input{
    width:190px;
    height:40px;
    padding-left: 90px;
}
/* 表单框 */
.user-con{
    position: relative;
    margin: 0 auto;
    width: 400px;
    background: rgba(255,255,255,0.8);
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
    font-size: 14px;
    color: #666;
    text-align: center;
    border-right: 1px solid #bdbdbd;
}
.user-con .user-item .user-content{
    padding: 10px 0 10px 90px;
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
    color: #000;
}
</style>
