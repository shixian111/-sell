<template>
   <!-- 顶部导航**********************************************************************************-->
   <div class="HeaderView">
	<div class="top_nav">
		<div class="left_nav f_lf">
			<p>
				电话:400-6302258
				</p></div>
				<div class="center_nav f_lf">
					<p class="f_l">您好！欢迎来到室内盆景绿植商城</p>
					<router-link to="/login"><a class="f_l" >[会员登录]</a></router-link>
					<router-link to="/register"><a class="f_l" >[注册]</a></router-link>
				</div>
				<div class="right_nav f_r">
					<router-link to="/nav/index"><a class="f_l">首页</a></router-link>
					<router-link to="/nav/usercenter/MyOrder"><a class="f_l">用户中心</a></router-link>
					<!-- <router-link to="/"><a class="f_l">帮助中心</a></router-link> -->
				</div>
			</div>
			<!-- logo搜索以及联系电话********************************************************************-->
			<header class="logo_nav clearfix block" style="position:relative;height:90px;">
				<!-- logo -->
				<div class="index_logo">
					<a href="index.html" name="logo">
						<img class="logo" src="../assets/images/index/logo.gif"></a>
				</div>
				<!-- 搜索框 -->
				<form class="searchForm" >
					<input name="keywords" type="text" class="keyword" value=""/>
					<input name="imageField" type="submit" value="搜索" class="go">
				</form>
				<!-- 搜索框下面的字 -->
				<div class="searchFormskey" style="clear:both; width:400px;">
					<a href="#">蝴蝶兰</a>
					<a href="#">发财树</a>
					<a href="#">天堂鸟</a>
				</div>
				<!-- 右边联系电话 -->
				<div class="r_tel">
					<img class="tel" src="../assets/images/index/tel.gif"></div>
			</header>
			
			</div>
</template>

<script scope>


        
</script>
<style>
@import '../assets/css/style.css'
</style>
