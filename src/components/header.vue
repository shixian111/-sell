<template>
   <!-- 顶部导航**********************************************************************************-->
   <div class="HeaderView" >
	<div class="top_nav">
		<div class="left_nav f_lf">
			<p>
				电话:400-6302258
				</p></div>
				<div class="center_nav f_lf">
					<p class="f_l">您好！欢迎来到室内盆景绿植商城</p>
					<router-link to="/"><a class="f_l" >[会员登录]</a></router-link>
					<router-link to="/register"><a class="f_l" >[注册]</a></router-link>
				</div>
				<div class="right_nav f_r">
					<router-link to="/nav/index"><a class="f_l">首页</a></router-link>
					<router-link to="/nav/usercenter/MyOrder"><a class="f_l">用户中心</a></router-link>
					<!-- <router-link to="/"><a class="f_l">帮助中心</a></router-link> -->
				</div>
			</div>
			<!-- logo搜索以及联系电话********************************************************************-->
			<header class="logo_nav clearfix block" style="position:relative;height:90px;z-index:2">
				<!-- logo -->
				<div class="index_logo">
					<a href="index.html" name="logo">
						<img class="logo" src="../assets/images/index/logo.gif"></a>
				</div>
				<!-- 搜索框 -->
				<form class="searchForm" >
					<input name="keywords" type="text" class="keyword" value=""/>
					<input name="imageField" type="submit" value="搜索" class="go"/>
				</form>
				
				<!-- 右边联系电话 -->
				<div class="r_tel">
					<img class="tel" src="../assets/images/index/tel.gif"></div>
			</header>
			
			</div>
</template>

<script scope>
export default{

	data(){
		return {
			headerHeight:125
		}
	},
	created(){
		
	},
	mounted(){

		window.addEventListener('mousewheel',this.handleScroll,false)
	},
	methods:{
		handleScroll(){
		var top=document.documentElement.scrollTop;
		 
		if(top>125){

			$('.logo_nav').css('position','fixed').css('background-color','#fff').css('top','0').css('width','100%')
			$('.searchForm').css('padding-left', '36%')
		}
		else{
			$('.logo_nav').css('position','relative').css('width','1100px')
			$('.searchForm').css('padding-left','330px')
		}
		},
		//搜索功能
		
	},
}

        
</script>
<style>
/* ====================
     顶部部分
==================== */
 .top_nav{
  height: 35px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e8e8e8;
  background-color: #f4f4f4;
}
.top_nav .left_nav,.top_nav .center_nav,.top_nav .right_nav {
  width: 30%;
  line-height: 35px;

}
 .top_nav .center_nav p{
    padding-left: 60px;
     padding-right: 10px;
  }
  .top_nav .right_nav a{
     padding-right: 53px;
  }
.top_nav .center_nav a:hover,.top_nav .right_nav a:hover{
  cursor: pointer;
color: red;
}
/* ====================
header部分(有logo等等)
==================== */
.logo_nav .index_logo a{
  position: absolute;
  top:12px;
  left:0;
}
/*搜索框*/
.logo_nav .searchForm
  { 
  float:left;
  padding-top: 30px;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 330px;
}
.logo_nav .searchForm .go{
cursor:pointer;
background-color: green;
 width:68px; 
 height:32px; 
 border:none; 
 float:left; 
 color:#fff;
 margin-right:5px;
}
.logo_nav .searchForm .keyword{
  width:298px; 
  height:32px;
  line-height:24px;  
  border:1px solid #3d6f02; 
  float:left}
  
/*联系电话*/
.logo_nav .r_tel img{
  position:absolute; 
  right:0;
   top:20px;
}
</style>
