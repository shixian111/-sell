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

<router-link  class="tab-item" to="/nav/product">
					<a >盆景植物</a></router-link>
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

<script scoped>
import headerView from '../components/header'
import BottomView from '../components/bottom'
export default{
components:{
	headerView,
	BottomView,
}
}
</script>
<style scoped>
/* ====================
banner部分(有首页等等)
==================== */
.nav_start{
  height: 45px;
  width: 100%;
  background-image: url(../assets/images/index/baner.png);
}
.nav_start .index_nav {
  width: 1108px;
height: 40px;
line-height: 40px;
position: relative;
margin-left: auto;
margin-right: auto;
}
/*nav里面的字*/
.nav_start .index_nav .tab-item a{
   color:#FFF;
  text-decoration:none;
  font-size:14px;
  padding:0 15px;
  line-height: 40px;
}
.nav_start .index_nav .tab-item a:hover{
  font-weight: bold;
}
/*购物车的位置*/
.nav_start .index_nav .tab-item a.car {
  position:absolute;
  right:0px;
  top:0px;
  clear: both;
  float: right;
  width: 172px;
  cursor:pointer;
}
/*购物车*/
.nav_start .index_nav .cart{
  background:url(../assets/images/index/cart_06.gif) 0 center no-repeat;
  padding-left:20px;
  width:164px;
  height:44px;
  line-height:23px;
  float:right;
  position:relative;
  font-size:12px;
}
/*购物车物品的数量*/
.nav_start .index_nav #car_num{
  background:transparent url("../assets/images/index/car_num_ico.png") no-repeat; 
  width: 20px;
margin-left: 8px;
text-align: center;
position: absolute;
top: -6px;
}
/*购物车物品数量的颜色*/
.nav_start .index_nav #car_num p{
  color: #ffffff !important;
}

</style>
