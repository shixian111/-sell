<template>
	<div class="loginView">
		<headerView></headerView>
		<!-- 登录信息*****************************************************************************-->
<div class="block">
   <div class="zuce">
   <div class="left_img f_l"><img src="../assets/images/zuce_href/bg.jpg" alt="盆景背景"></div>	
   <div class="right_info f_r">
   		<div class="name">用户名:<input  type="text" size="30"></div>
   		<div class="pswd">密码:<input type="password" size="32"></div>
   		<router-link to="/register"><a class="sure f_l" >注册</a></router-link>
   		<a class="back f_r" href="#">确定</a>
   	</div>
   </div>

</div>
		<bottomView></bottomView>
	</div>

</template>

<script scope>
import headerView from '../components/header.vue'
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
  @import '../assets/css/style.css'
</style>
