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
                            
                            <p class="err-msg">Error</p>
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="username">
                               用户名
                            </label>
                            <input class="user-content" id="username" placeholder="请输入用户名" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="password">
                                密码
                            </label>
                            <input type="password" class="user-content" id="password" placeholder="请输入密码" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="password-confirm">
                               确认密码
                            </label>
                            <input type="password" class="user-content" id="password-confirm" placeholder="请再次输入密码" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="phone">
                               手机号
                            </label>
                            <input class="user-content" id="phone" placeholder="请输入手机号" autocomplete="off">
                        </div>
                        <div class="user-item">
                            <label class="user-label" for="email">
                               邮箱
                            </label>
                            <input class="user-content" id="email" placeholder="请输入邮箱" autocomplete="off">
                        </div>
                        
                       
                        <a class="btn btn-submit" id="submit">立即注册</a>
                        <div class="link-item">
                            <router-link to='/'><a class="link" >已有帐号，去登录>></a></router-link>
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

   }
},

methods:{

}
}
        
</script>
<style scope>
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
