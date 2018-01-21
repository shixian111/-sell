<template>

<div class="indexView">
	
	<!-- 图片的导航********************************************************************************-->
			<section class="img_nav clearfix">

				<div class="img_banner">
					<swiper :options="swiperOption" ref="mySwiperA" style="position:relative">
					<swiper-slide  style="height:496px;float:left;"><span id="banner_1" ><a href="#"><img src="../assets/images/index/slide1.jpg" alt=""></a></span></swiper-slide>
					<swiper-slide  style="height:496px;float:left;"><span id="banner_2" ><a href="#"><img src="../assets/images/index/slide2.jpg" alt=""></a></span></swiper-slide>
					<swiper-slide  style="height:496px;float:left;"><span id="banner_3" ><a href="#"><img src="../assets/images/index/slide3.jpg" alt=""></a></span></swiper-slide>
					<swiper-slide  style="height:496px;float:left;"><span id="banner_4" ><a href="#"><img src="../assets/images/index/slide4.jpg" alt=""></a></span></swiper-slide>	
				    </swiper>	
				</div>
				
			</section>
			

			<!-- 之前写过满赠，现在删除了*********************************************************************************************-->
			 <div class="gifts clearfix">
				
				<!-- 一些盆景信息 ******************************************************************************-->
				<div class="block clearfix">
					<!-- 资讯 *******************************************************************************-->
					<div class="box_news">
						<div id="mallNews" class="f_r">
							<div class="newart_tit">
								<a href="#">天堂鸟资讯</a>
							</div>
							<div class="NewsList tc" style="border-top:none">
								<ul style="padding-left: 2px;">
									<li>
										<a href="#" title="薰衣草的习性管理" style="font-family: MicrosoftYaHei;">薰衣草的习性管理</a>
										<li>
											<a href="#" title="捕虫堇的生长习性及管理" style="font-family: MicrosoftYaHei;">捕虫堇的生长习性及管理</a>
										</li>
										<li>
											<a href="#" title="天竺葵为什么会有不同的花色变化" style="font-family: MicrosoftYaHei;">天竺葵为什么会有不同的花色变化</a>
										</li>
										<li>
											<a href="#" title="植物水培的通用插法" style="font-family: MicrosoftYaHei;">植物水培的通用插法</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="news_right">
								<img src="../assets/images/index/news_right_03.gif"></div>

						</div>
					</div>
				</div>
				<!-- 这段代码的做用是:清除同行元素，不允许其它元素与之在一行内******************************* -->
               <div style="clear:both"></div>
				<!-- 盆景商品 ****************************************************************************-->
				<div class="box box_3">
					<div class="itemTit" id="itemBest">

						<div class="tit"> <font color="ff0000">吸甲醛</font>
							的室内花卉植物
						</div>
					</div>
					<div id="show_best_area" class="clearfix">
						<div class="goodsItem">
							<div class="goods_border">
								<a href="#" target="_blank">
									<img src="../assets/images/product/xjq1.jpg" alt="常春藤" class="goodsimg"></a>
								<br>
								<p class="f1">
									<a href="#" title="常春藤" target="_blank">常春藤</a>
								</p> <font class="market">市场价：￥19.20元</font>
								<br>

								<font class="f1">本店价：￥16.00元</font>
								<br>已售:205 &nbsp; 评价数:29条</div>
						</div>
						<div class="goodsItem">
							<div class="goods_border">
								<a href="#" target="_blank">
									<img src="../assets/images/product/xjq2.jpg" alt="吊绿萝" class="goodsimg"></a>
								<br>
								<p class="f1">
									<a href="#" title="吊绿萝" target="_blank">吊绿萝</a>
								</p>

								<font class="market">市场价：￥18.00元</font>
								<br>

								<font class="f1">本店价：￥15.00元</font>
								<br>已售:2204 &nbsp; 评价数:34条</div>
						</div>
						<div class="goodsItem">
							<div class="goods_border">
								<a href="#" target="_blank">
									<img src="../assets/images/product/xjq3.jpg" alt="虎尾兰" class="goodsimg"></a>
								<br>
								<p class="f1">
									<a href="#" title="虎尾兰" target="_blank">虎尾兰</a>
								</p>

								<font class="market">市场价：￥14.40元</font>
								<br>

								<font class="f1">本店价：￥12.00元</font>
								<br>已售:149 &nbsp; 评价数:15条</div>
						</div>
						<div class="goodsItem">
							<div class="goods_border">
								<a href="#" target="_blank">
									<img src="../assets/images/product/xjq4.jpg" alt="芦荟" class="goodsimg"></a>
								<br>
								<p class="f1">
									<a href="#" title="芦荟" target="_blank">芦荟</a>
								</p>

								<font class="market">市场价：￥18.00元</font>
								<br>

								<font class="f1">本店价：￥15.00元</font>
								<br>已售:124 &nbsp; 评价数:18条</div>
						</div>
						<div class="goodsItem">
							<div class="goods_border">
								<a href="#" target="_blank">
									<img src="../assets/images/product/xjq5.jpg" alt="绿萝" class="goodsimg"></a>
								<br>
								<p class="f1">
									<a href="#" title="绿萝" target="_blank">绿萝</a>
								</p>

								<font class="market">市场价：￥141.60元</font>
								<br>

								<font class="f1">本店价：￥118.00元</font>
								<br>已售:357 &nbsp; 评价数:31条</div>
						</div>

					</div>
				</div>
				<!-- <分割**************************************************************** -->
			<div class="blank"></div>
				<!-- 小型室内植物 *****************************************************************-->
<div class="box">
 <div class="box_1">
  <h3 style="position:relative"><img style="position:absolute; left:0px; top:8px;" src="../assets/images/index/biao2.gif"> <span><a href="#" style="font-size:14px; font-weight:bold">小型室内植物</a></span></h3>
    <div class="goods_cat">
    <div class="clearfix goodsBox" style="border:none;width:1100px">
           <router-link  to="/nav/index/detail"> <div class="goodsItem ">
	     <div class="goods_border">
           <a href="#" target="_blank"><img src="../assets/images/product/small1.jpg" alt="自动浇水花盆植物组合盆栽" class="goodsimg"></a><br>
           <p><a href="#" title="自动浇水花盆植物组合盆栽" target="_blank">自动浇水花盆植物组合盆栽</a></p>
		    <font class="market">市场价：￥20.40元</font><br>
                     本店价：<font class="shop_s">￥17.00元</font>
          <br>
		  
		  已售:12 &nbsp; 评价数:1条<br>
		  </div>
        </div></router-link>
            <div class="goodsItem ">
	     <div class="goods_border">
           <a href="#" target="_blank"><img src="../assets/images/product/small2.jpg" alt="花叶蔓长春" class="goodsimg"></a><br>
           <p><a href="#" title="花叶蔓长春" target="_blank">花叶蔓长春</a></p>
		    <font class="market">市场价：￥18.00元</font><br>
                     本店价：<font class="shop_s">￥15.00元</font>
          <br>
		  
		  已售:11 &nbsp; 评价数:1条<br>
		  </div>
        </div>
            <div class="goodsItem ">
	     <div class="goods_border">
           <a href="#" target="_blank"><img src="../assets/images/product/small3.jpg" alt="米兰" class="goodsimg"></a><br>
           <p><a href="#" title="米兰" target="_blank">米兰</a></p>
		    <font class="market">市场价：￥31.20元</font><br>
                     本店价：<font class="shop_s">￥26.00元</font>
          <br>
		  
		  已售:49 &nbsp; 评价数:6条<br>
		  </div>
        </div>
            <div class="goodsItem ">
	     <div class="goods_border">
           <a href="#" target="_blank"><img src="../assets/images/product/small4.jpg" alt="小型吊绿萝" class="goodsimg"></a><br>
           <p><a href="#" title="小型吊绿萝" target="_blank">小型吊绿萝</a></p>
		    <font class="market">市场价：￥7.19元</font><br>
                     本店价：<font class="shop_s">￥6.00元</font>
          <br>
		  
		  已售:138 &nbsp; 评价数:8条<br>
		  </div>
        </div>
            <div class="goodsItem ">
	     <div class="goods_border">
           <a href="#" target="_blank"><img src="../assets/images/product/small5.jpg" alt="彩叶草" class="goodsimg"></a><br>
           <p><a href="#" title="彩叶草" target="_blank">彩叶草</a></p>
		    <font class="market">市场价：￥10.79元</font><br>
                     本店价：<font class="shop_s">￥9.00元</font>
          <br>
		  
		  已售:57 &nbsp; 评价数:6条<br>
		  </div>
        </div>
          </div>
    </div>
 </div>
</div>
<div class="blank"></div>
<!-- 底部部分 帮助**********************************************************************************-->
<div class="block">
  <div class="box">
   <div class="helpTitBg" style="clear:both">
<dl style="border-right:1px solid #ccc;">
  <dt><a href="#" title="购物指南">购物指南</a></dt>
    <dd><a href="#" title="购物流程">购物流程</a></dd>
    <dd><a href="#" title="注册新会员">注册新会员</a></dd>
    <dd><a href="#" title="密码找回">密码找回</a></dd>
  </dl>
<dl style="border-right:1px solid #ccc;">
  <dt><a href="#" title="配送方式">配送方式</a></dt>
    <dd><a href="#" title="送货上门区域">送货上门区域</a></dd>
  </dl>
<dl style="border-right:1px solid #ccc;">
  <dt><a href="#" title="支付方式">支付方式</a></dt>
    <dd><a href="#" title="货到付款">货到付款</a></dd>
    <dd><a href="#" title="支付宝付款">支付宝付款</a></dd>
     <dd><a href="#" title="账户余额支付">账户余额支付</a></dd>
  </dl>
<dl>
  <dt><a href="#" title="特色服务">特色服务</a></dt>
    <dd><a href="#" title="成都花卉简介">成都花卉简介</a></dd>
    <dd><a href="#" title="售后服务政策">售后服务政策</a></dd>
    <dd><a href="#" title="绿色植物养护">绿色植物养护</a></dd>
    <dd><a href="#" title="积分使用方法">积分使用方法</a></dd>
  </dl>
  </div>
  </div>
</div>
<div class="blank"></div>
<!-- 底部部分 img**********************************************************************************-->
<div class="block">
	<img src="../assets/images/index/02.gif" width="1098" height="56">
</div>
<div class="blank"></div>
<!-- 底部部分 友情链接*****************************************************************************-->
<div id="bottomNav" class="box">
 <div class="box_1">
  <div class="links clearfix"> 
  
友情链接:
        
    
        [<a href="http://www.cdtiantangniao.com" target="_blank" title="成都植物租赁">成都植物租赁</a>]
        [<a href="http://www.52yanghua.com" target="_blank" title="养花技巧">养花技巧</a>]
        [<a href="http://www.rhd123.com/" target="_blank" title="马尼拉草坪">马尼拉草坪</a>]
        [<a href="http://www.5ufan.com" target="_blank" title="无忧返利">无忧返利</a>]
        [<a href="http://www.xiaoyaodiaoyu.com" target="_blank" title="钓鱼小药">钓鱼小药</a>]
        [<a href="http://www.zuihua.com" target="_blank" title="醉花网">醉花网</a>]
        [<a href="http://www.czcaoping.com/" target="_blank" title="草坪价格">草坪价格</a>]
        [<a href="http://www.12ku.cn" target="_blank" title="古奇男士包">古奇男士包</a>]
        [<a href="http://www.qingyinghuanjing.com" target="_blank" title="昆明除甲醛">昆明除甲醛</a>]
        [<a href="http://czqingx.ohqly.com" target="_blank" title="青县吧">青县吧</a>]
        [<a href="http://www.yiimu.com" target="_blank" title="绿色植物">绿色植物</a>]
        [<a href="http://www.9yxs.com/" target="_blank" title="银杏树">银杏树</a>]
          [<a href="http://www.huahuibaike.com" target="_blank" title="花卉百科">花卉百科</a>]
        [<a href="http://www.garden42.com" target="_blank" title="多肉植物">多肉植物</a>]
        [<a href="http://www.fugymall.com" target="_blank" title="奢侈品商城">奢侈品商城</a>]
        [<a href="http://lazyren.com/" target="_blank" title="懒人网">懒人网</a>]
           
 
 </div>
 </div>
</div>
<div class="blank"></div>
<!-- 底部部分 分割*****************************************************************************-->
<div id="bottomNav" class="box">
  <div class="bNavList clearfix">
      
  </div>
</div>
<div class="blank"></div>
 <div class="scroll_div"><a href="#top" title="返回顶部"><img src="../assets/images/index/top.png" width="82" height="85" alt="返回顶部"></a></div>

<!-- 链接*****************************************************************************-->
<div class="keifu"><a href="http://www.cnpenjing.com/zhishi/" target="_blank"><img src="../assets/images/index/11.jpg"></a></div>

</div>
</template>

<script scope>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{

data(){
	//http://blog.csdn.net/susuzhe123/article/details/69525609
	return{
		 swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          slidesPerView:'auto',
          notNextTick: true,
        autoplay : 3000,
        speed:300,
          grabCursor : true,
          setWrapperSize :true,
          Height: 496,
         autoplayDisableOnInteraction : false,
          observeParents:true,
          loop:true,
        	effect :'fade',
        	slidesPerGroup:1,
      }

	}
},
computed: {
    swiper() {
     return this.$refs.mySwiperA.swiper
    }
  },
  mounted() {
  	var _this=this
  	   window.timer=null
  	   var i=0;
  	    timer=setInterval(function(){
     _this.swiper.slideTo(i%4, 1000, false)
     i=i+1;
    },2000)
    
   },
   beforeDestroy(){
   		window.clearTimeout(timer);
   },
methods:{
    
},
components:{
	 swiper,
    swiperSlide
}
}


        
</script>
<style scope>
/* ====================
图片导航部分
==================== */
.img_nav .img_banner{
 width: 100%;
 height: 496px;
 margin:0 auto;
 overflow: hidden;
}
/*包裹图片的盒子*/
.img_nav .img_banner #banner_1,.img_nav .img_banner #banner_2,.img_nav .img_banner #banner_3,.img_nav .img_banner #banner_4{
width: 1219px;
 height: 496px;
}

/*每个图片的大小*/
.img_nav .img_banner #banner_1 a img,.img_nav .img_banner #banner_2 a img,.img_nav .img_banner #banner_3 a img,.img_nav .img_banner #banner_4 a img{
margin:0;
padding: 0;
 margin:0 auto;
 display: block;
}
.img_nav .banner_m1 {
  height: 22px;
    width: 500px;
    position: absolute;
    margin: -50px 0px 0px 800px !important;
}
.img_nav .banner_m1 li {
  cursor: pointer;
    height: 22px !important;
  width: 22px !important;
  float: left;
  background:transparent url("../assets/images/index/icn_baner_y.png") no-repeat;
}
.img_nav .banner_m1 li.active {
    height: 22px !important;
  width: 22px !important;
  float: left !important;
  background:transparent url("../assets/images/index/icn_baner_act.png") no-repeat; 
}


/* ====================
满赠部分
==================== */
/*.gifts{ height:960px; padding-top:40px; background-image:url(../images/index/22.png);}
.gifts .index_gifts{ width:1132px; height:885px; background-color:#442c60; padding-top:25px;}
.gifts .index_gifts .gift_line{ width:1081px; height:857px; border: 1px solid #64517f; clear:both;}
.gifts .index_gifts .gift_line .mztop { margin:0 auto; height:90px; width:425px; margin-top:20px;}
.gifts .index_gifts .gift_line .mzbottom { margin:0 auto; width:986px;}*/
/* ====================
资讯部分
==================== */
.box_news{ width:1100px; height:190px; margin-top:60px; margin-bottom:10px;}
#mallNews{width:220px; overflow:hidden;float: left; }
.newart_tit{
  width: 220px;
height: 26px;
line-height: 26px;
font-weight: bold;
text-align: left;
color: #c80733;
font-size: 18px;
padding-left: 41px;
text-decoration: none;

margin-top: 26px;
}
.newart_tit a{
  text-decoration: none;
  color: #666666;
  padding-left: 10px;
}
#mallNews .NewsList{background:#FFFFFF; padding:8px;}
#mallNews .NewsList ul{ line-height:21px;}
#mallNews .NewsList ul li{
    background:url(../assets/images/index/bg.gif) no-repeat 0px -167px; 
    padding:0px 0px 0px 10px;
    line-height:21px; 
    height:21px;
    text-align: left;}


/* ====================
盆景商品部分 吸甲醛
==================== */
  .box{ overflow:hidden;}
.box_3{ width:1100px;border:1px solid #dedede; background:url(../assets/images/index/tit1.gif) repeat-x;margin-top: 30px;}
 .itemTit{height:34px; padding-left:290px; text-align:right; position:relative; 
  
   }  
   .itemTit .tit{
  width:200px;
  height:20px;
  position:absolute;
  left:0;
  top:0;
  text-align:left;
  padding:5px 0 0 20px;
  font-weight:bold;
  color:#333;
  background:url(../assets/images/index/biao1.gif) 10px 8px no-repeat;
  font-size: 14px;
}
.goodsItem{
  width:200px;
  float:left;
  position:relative;
  overflow:hidden;
  text-align:center;
  padding-top: 0px;
  padding-right: 9px;
  padding-bottom: 15px;
  padding-left: 9px;
}
.goods_border { border: 1px solid #d8d8d8; padding: 4px; }
.goodsItem .goodsimg{width:180px; height:200px; border:1px solid #cdcece; margin-bottom:4px;}
.goodsItem p{text-align:center; color:#3f3f3f; font-weight:normal}
.goodsItem p a{color:#3f3f3f; text-decoration:none;}
.goodsItem p a:hover{color:#ff6600; text-decoration:none;}
.goodsItem span{width:40px; height:40px; position:absolute;left:0px; top:0px;}
.goodsItem span.best{background:url(../assets/images/index/bg.gif) no-repeat 0px -304px;}
.goodsItem span.news{background:url(../assets/images/index/bg.gif) no-repeat -75px -304px;}
.goodsItem span.hot{background:url(../assets/images/index/bg.gif) no-repeat -161px -304px;}
.goods_cat{ padding:10px;}
.goods_cat .goodsItem{ padding:5px 5px 15px 10px; }
.market{ font-size:12px; text-decoration:line-through; color:#999}
 .f1{color:#ff3300; font-weight:bold;}
/* ====================
盆景商品部分 小型盆景
==================== */
.blank{height:8px; line-height:8px; clear:both; visibility:hidden;}
.box_1{ border:1px solid #e2e2e2; background-color:#fff;}
h3{height:32px; line-height:32px; font-size:12px; background:url(../assets/images/index/category_tit.gif) repeat-x; text-align:left; padding:0 12px; font-weight:100;}
/* ====================
盆景商品部分完毕
==================== */









</style>
