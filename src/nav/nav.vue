<template>
	<div class="NavView">
   <headerView></headerView>
   <!-- banner导航 ****************************************************************************-->
			<nav class="nav_start">
				<div class="index_nav">
<router-link  class="tab-item" to="/nav/index">
					<a >首页</a></router-link>

<router-link  class="tab-item" to="/nav/news">
					<a >
						新闻动态
						<img src="../assets/images/index/h.png" width="24" height="11"></a></router-link>
<router-link  class="tab-item" to="/nav/culture">
					<a >盆景文化</a></router-link>

<router-link  class="tab-item" to="/nav/help">
					<a >帮助中心</a></router-link>
<router-link  class="tab-item" to="/nav/call">
					<a >联系我们</a></router-link>
<router-link  class="tab-item" to="/nav/cart">
					<a  class="car"></a>

					<div class="cart" id="ECS_CARTINFO">
						<div id="car_num">
							<p>0</p>
						</div>
					</div></router-link>
				</div>
			</nav>
			<router-view></router-view>
   <BottomView></BottomView>
   </div>
</template>

<script scope>
import headerView from '../components/header'
import BottomView from '../components/bottom'
export default{
components:{
	headerView,
	BottomView,
}
}
</script>
<style>
@import '../assets/css/style.css'
</style>
