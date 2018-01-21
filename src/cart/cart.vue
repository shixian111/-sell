<template>
<div class="cartView">
	<div class="block box">
<div class="blank"></div>
 <div id="ur_here">
当前位置:  <code>&gt;</code> 购物流程 
</div>
</div>
<div class="blank"></div>
<div class="blank"></div>
<!-- 下面的订单列表 -->
<div class="block">
  
  <div class="flowBox">
    <h6><span>商品列表</span></h6>
        <form id="formCart" name="formCart" method="post" action="flow.php">
           <table width="99%" align="center" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
            <tbody><tr>
              <th bgcolor="#ffffff">商品名称</th>
                    <th bgcolor="#ffffff">属性</th>
                                          <th bgcolor="#ffffff">本店价</th>
              <th bgcolor="#ffffff">我要买</th>
              <th bgcolor="#ffffff">小计</th>
              <th bgcolor="#ffffff">操作</th>
            </tr>
                        <tr>
              <td bgcolor="#ffffff" align="center">
                                                      <a href="" target="_blank"><img style="width:80px; height:80px;" src="http://www.028huahui.cn/images/201610/thumb_img/2_thumb_G_1475884707879.jpg" border="0" title="广东万年青"></a><br>
                    <a href="goods.php?id=2" target="_blank" class="f6">广东万年青</a>
                                                                                    </td>
                            <td bgcolor="#ffffff">盆器:原装盆 <br>
高度:约0.6~0.8米 <br>
</td>
                                          <td align="right" bgcolor="#ffffff">￥48.00元</td>
              <td align="right" bgcolor="#ffffff">
                                <input type="text" name="goods_number[13143]" id="goods_number_13143" value="3" size="4" class="inputBg" style="text-align:center " onkeydown="">
                              </td>
              <td align="right" bgcolor="#ffffff">￥144.00元</td>
              <td align="center" bgcolor="#ffffff">
                <a href="" class="f6">删除</a>
                            </td>
            </tr>
                      </tbody></table>
          <table width="99%" align="center" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
            <tbody><tr>
              <td bgcolor="#ffffff">
                            购物金额小计 ￥144.00元              </td>
              <td align="right" bgcolor="#ffffff">
                <input type="button" value="清空购物车" class="bnt_blue_1">
                <input name="submit" type="submit" class="bnt_blue_1" value="更新购物车">
              </td>
            </tr>
          </tbody></table>
          <input type="hidden" name="step" value="update_cart">
        </form>
        <table width="99%" align="center" border="0" cellpadding="5" cellspacing="0" bgcolor="#dddddd">
          <tbody><tr>
            <td bgcolor="#ffffff"><router-link to="/nav/index"><a ><img src="../assets/images/cart/continue.gif" alt="continue"></a></router-link></td>
            <td bgcolor="#ffffff" align="right"><router-link to="/nav/cart/sum"><a ><img src="../assets/images/cart/checkout.gif" alt="checkout"></a></router-link></td>
          </tr>
        </tbody></table>
       </div>
    <div class="blank"></div>
   
    <div class="blank5"></div>
  
  
  

        
        
                



</div>
</div>

</template>

<script scope>


        
</script>
<style scope>
/*购物车结算板块*/
/* ====================
     购物流程
==================== */
    .flowBox{ padding-bottom:5px;}
   .flowBox h6{ background:#ececec; color:#666666; font-weight:bold}
    .flowBox table{ margin:5px auto;}
    /*2.62在购物车里面显示相关配件*/
    
</style>
