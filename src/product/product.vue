<template>
	<div class="productView">
		<div class="clear">
			<div class="block box">
				<div class="blank"></div>
				<div id="ur_here">
					当前位置:
					<code></code>
					<a >花卉植物</a>
				</div>
			</div>
			<div class="blank"></div>

			<div class="block clearfix">
				<!-- 左侧 -->
				<div class="AreaL">

					<div id="category_tree">
						<div class="tit">商品分类</div>
						<dl>
							<dt>
								<a >花卉植物</a>
							</dt>
							<dd>
								<a >大型室内花卉植物</a>

								<a >小型室内植物</a>

								<a >微型室内植物</a>

								<a >室内花卉</a>

								<a >吸甲醛的花卉植物</a>

								<a >水培室内植物</a>

								<a >时令草花</a>

								<a >年宵花</a>

								<a >植物组合</a>

								<a >多肉植物</a>

							</dd>
						</dl>

					</div>
					<div class="blank"></div>
				</div>
				<!-- 右侧 -->
				<div class="AreaR">
					<div class="box">
						<div class="box_1">
							<h3>
								<span>商品列表</span>

								<a href="">
									<img src="../assets/images/product/goods_id_default.gif" alt="按上架时间排序"></a>
								<a href="">
									<img src="../assets/images/product/shop_price_default.gif" alt="按价格排序"></a>
								<a href="">
									<img src="../assets/images/product/last_update_default.gif" alt="按更新时间排序"></a>

							</h3>
							<div class="clearfix goodsBox" style="border:none; padding:11px 0 10px 5px;">
								<div class="goodsItem">
									<div class="goods_border">
										<a href="zhiwu-53.html" target="_blank">
											<img src="http://www.028huahui.cn/images/201706/thumb_img/53_thumb_G_1498613330768.jpg" alt="吊绿萝" class="goodsimg"></a>
										<br>
										<p>
											<a href="" title="吊绿萝" target="_blank">吊绿萝</a>
										</p> <font class="shop_s">￥16.00元</font>
										<br>
										<a href="javascript:addToCart(53)">
											<img src="../assets/images/product/goumai.gif"></a>
										&nbsp;&nbsp;&nbsp;&nbsp;
										<a href="javascript:collect(53);">
											<img src="../assets/images/product/shoucang.gif"></a>
										<br>
										已售:2405  &nbsp; 评价数:36条
										<br>可购买数量:29</div>
								</div>

							</div>
						</div>
						<div class="blank5"></div>
					</div>
					<div id="pager" class="pagebar">
						<span class="f_l " style="margin-right:10px;">
							总计 <b>296</b>
							个记录
						</span>
						<span class="page_now">1</span>
						<a href="">[2]</a>
						<a href="">[3]</a>

						<a class="next" href="">下一页</a>
					</div>
				</div>
			</div>

		</div>
	</div>

</template>

<script ></script>
<style scoped>
	/*商品分类*/
   #category_tree{background-color:#fff; border:2px solid #488601}
   #category_tree .tit{ background: url(../assets/images/product/category_tit.gif) repeat-x; height:32px; line-height:32px; font-size:14px; font-weight:bold; padding-left:15px; }
   
   #category_tree dl{margin:3px; border-bottom:1px dashed #cbdcb6; padding:3px 0}
   #category_tree dt{height:22px; line-height:22px; font-size:14px;}
   #category_tree dt a{background:url(../assets/images/product/biao4.gif) no-repeat 10px center;
   color:#4a8900; padding-left:20px; text-decoration:none; font-weight:bold
   }
   #category_tree dd{padding:3px 0 3px 10px; line-height:24px;}
   #category_tree dd a{color:#666; text-decoration:none; padding-right:10px;cursor: pointer;}
   #category_tree dd a:hover{color:#ff6600; text-decoration:none;}

   /*模块标题*/
  h3{height:32px; line-height:32px; font-size:12px; background:url(../assets/images/product/category_tit.gif) repeat-x; text-align:right;
  padding:0 12px; font-weight:100;
  }
   h3.border{border:1px solid #e2e2e2; border-bottom:none;}
  h3 img{position:relative; top:0;}
  h3 span{float:left; height:32px; line-height:32px; text-align:left;
   font-weight:bold; color:#990000; padding-left:5px;}
   h3 a{ color:#333; text-decoration:none}
  h5{height:26px; line-height:26px; text-align:right; background-color:#f6f6f6; font-size:12px;
  color:#900; padding:0 10px 0 0;
  }
  h5 span{float:left; font-weight:bold;padding-left:15px;}
  h6{height:23px; line-height:23px; text-align:right; font-size:12px; background:#f6f6f6; color:#3f3f3f;
  border:1px solid #fff; padding-right:10px;
  }
  h6 span{float:left; padding-left:15px;}
   /*单个商品*/
       .goodsItem{width:200px; float:left; position:relative; overflow:hidden; padding:0px 7px 15px 7px; text-align:center}
	   .goodsBox_1 .goodsItem{ padding:0px 3px 15px 3px;width:180px;}
       .goodsItem .goodsimg{width:180px; height:200px; border:1px solid #cdcece; margin-bottom:4px;}

       .goodsItem p{text-align:center; color:#3f3f3f; font-weight:normal}
       .goodsItem p a{color:#3f3f3f; text-decoration:none;}
       .goodsItem p a:hover{color:#ff6600; text-decoration:none;}
       .goodsItem span{width:40px; height:40px; position:absolute;left:0px; top:0px;}
	   .goods_cat{ padding:10px;}
	   .goods_cat .goodsItem{ padding:5px 5px 15px 10px; }
	   .goods_border { border: 1px solid #d8d8d8; padding: 4px; }
.goods_border .goods_inner { width: 196px; margin-right: auto; margin-left: auto; margin-top: 4px; }
	    /*翻页*/
   .pagebar{height:20px; float:right;color:#666;}
   .pagebar img{position:relative; top:2px;}
   .pagebar a{display:block; float:left; margin:0 2px; color:#666; text-decoration:none;}
   .pagebar a:hover{color:#c00; text-decoration:none;}
   .pagebar .page_now{display:block; float:left; margin:0 5px; color:#c00; font-weight:bold; background:#fff;}
   #pager a{color:#666; text-decoration:none;}
</style>