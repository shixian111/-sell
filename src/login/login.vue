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
                           
                            <p class="err-msg">Error</p>
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
                            <input v-model="password" :keyup.13="login" type="password" class="user-content" id="password" placeholder="请输入密码" autocomplete="off">
                        </div>
                        <a class="btn btn-submit" id="submit" @click="login">登录</a>
                        <div class="link-item">
                            <a class="link" href="./user-pass-reset.html" target="_blank" >忘记密码</a>
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
	}
},
created(){
   
},
methods:{
  login(){
     $.ajax({
    url:IP+'/shop/market/getAlreadyCompleteApply',
    headers:{
      Authorization:_this.$store.state.currentdata.token,
    },
    type: 'POST',
    async:false,
    dataType: 'json',
    data: {
      'marketId':1,
      'page':0,
      'size':15,
    },
  success:function(data){
//     var res=data.data;        
  },
  error:function() {
  alert("服务器内部错误")
  }
  },
  );
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
    color: #999;
}
</style>
