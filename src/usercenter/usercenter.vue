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
		<router-link  to="/nav/usercenter/userinfo"><a href=""> 我的个人信息</a></router-link>
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
<style scoped>
/*用户中心板块/
  /* ====================
     用户中心
==================== */
 .box_1 .userCenterBox{border:4px solid #f8f8f8; background-color:#fff;}
 .box_1 .userCenterBox .userMenu a.curs{ font-weight:bold;}
 .box_1 .userCenterBox .userMenu a{display:block; height:25px; line-height:25px; 
    color:#3f3f3f; text-decoration:none; margin:0 0 3px 10px; padding-left:3px;
    }
 /*.box_1{border:1px solid #e2e2e2; background-color:#fff;}*/
</style>
