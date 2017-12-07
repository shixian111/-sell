<template>
<div class="usercenterView">
	<div class="block box">
<div class="blank"></div>
 <div id="ur_here">
当前位置:  <code>&gt;</code> 用户中心 
</div>
</div>
<div class="blank"></div>
<div class="block clearfix">
  
  <div class="AreaL">
    <div class="box">
     <div class="box_1">
      <div class="userCenterBox">
        <div class="userMenu">
		<router-link  to="/nav/usercenter/MyOrder"><a href="" class="curs">我的订单</a></router-link>
		<router-link  to="/nav/usercenter/address"><a href="">收货地址</a></router-link>
		<router-link  to="/nav/usercenter/message"><a href="">我的留言</a></router-link>
		<router-link  to="/nav/usercenter/comment"><a href=""> 我的评论</a></router-link>
</div>      </div>
     </div>
    </div>
  </div>
  <router-view></router-view>
  
  </div>
</div> 


	
</div>

</template>

<script scope>


        
</script>
<style >
@import '../assets/css/style.css'
</style>
