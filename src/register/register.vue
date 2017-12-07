<template>
<div class="registerView">
	<headerView></headerView>
	<!-- 注册信息*****************************************************************************-->
<div class="block">
   <div class="zuce">
   <div class="left_img f_l"><img src="../assets/images/zuce_href/bg.jpg" alt="盆景背景"></div>	
   <div class="right_info f_r">
   		<div class="name">注册用户名:<input  type="text" size="30"></div>
   		<div class="pswd">注册密码:<input type="password" size="32"></div>
   		<a class="sure f_l" href="#">确定</a><a class="back f_r" href="index.html">返回</a>
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
<style >
  @import '../assets/css/style.css'
</style>
