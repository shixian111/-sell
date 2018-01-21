<template>
<div class="addressView">
<div class="AreaR">
    <div class="box">
     <div class="box_1">
      <div class="userCenterBox boxCenterList clearfix" style="_height:1%;">      
              <h5><span>收货人信息</span></h5>
        <div class="blank"></div>
         
          
              
     
                        <form action="user.php" method="post" name="theForm" onsubmit="return checkConsignee(this)">
              <table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
                <tbody><tr>
                  <td align="right" bgcolor="#ffffff">配送区域：</td>
                  <td colspan="3" align="left" bgcolor="#ffffff"><input type="hidden" name="country" id="selCountries_0" value="1">
                    <select name="province" id="selProvinces_0" onchange="region.changed(this, 2, 'selCities_0')">
                      <option value="0">请选择省</option>
                                            <option value="2">北京</option>
                                            <option value="3">安徽</option>
                                            <option value="4">福建</option>
                                            <option value="5">甘肃</option>
                                            <option value="6">广东</option>
                                            <option value="7">广西</option>
                                            <option value="8">贵州</option>
                                            <option value="9">海南</option>
                                            <option value="10">河北</option>
                                            <option value="11">河南</option>
                                            <option value="12">黑龙江</option>
                                            <option value="13">湖北</option>
                                            <option value="14">湖南</option>
                                            <option value="15">吉林</option>
                                            <option value="16">江苏</option>
                                            <option value="17">江西</option>
                                            <option value="18">辽宁</option>
                                            <option value="19">内蒙古</option>
                                            <option value="20">宁夏</option>
                                            <option value="21">青海</option>
                                            <option value="22">山东</option>
                                            <option value="23">山西</option>
                                            <option value="24">陕西</option>
                                            <option value="25">上海</option>
                                            <option value="26" selected="">四川</option>
                                            <option value="27">天津</option>
                                            <option value="28">西藏</option>
                                            <option value="29">新疆</option>
                                            <option value="30">云南</option>
                                            <option value="31">浙江</option>
                                            <option value="32">重庆</option>
                                            <option value="33">香港</option>
                                            <option value="34">澳门</option>
                                            <option value="35">台湾</option>
                                          </select>
                    <select name="city" id="selCities_0" onchange="region.changed(this, 3, 'selDistricts_0')">
                      <option value="0">请选择市</option>
                                            <option value="322" selected="">成都</option>
                                            <option value="323">绵阳</option>
                                            <option value="324">阿坝</option>
                                            <option value="325">巴中</option>
                                            <option value="326">达州</option>
                                            <option value="327">德阳</option>
                                            <option value="328">甘孜</option>
                                            <option value="329">广安</option>
                                            <option value="330">广元</option>
                                            <option value="331">乐山</option>
                                            <option value="332">凉山</option>
                                            <option value="333">眉山</option>
                                            <option value="334">南充</option>
                                            <option value="335">内江</option>
                                            <option value="336">攀枝花</option>
                                            <option value="337">遂宁</option>
                                            <option value="338">雅安</option>
                                            <option value="339">宜宾</option>
                                            <option value="340">资阳</option>
                                            <option value="341">自贡</option>
                                            <option value="342">泸州</option>
                                          </select>
<select name="district" id="selDistricts_0" onchange="region.changed(this, 4, 'selStreet_0')">
                  <option value="0">请选择区</option>
                                            <option value="3673">锦江区</option>
                                            <option value="3682">金牛区</option>
                                            <option value="3668">武侯区</option>
                                            <option value="3676">成华区</option>
                                            <option value="3685">龙泉驿区</option>
                                            <option value="3679">新都区</option>
                                            <option value="3689">温江区</option>
                                            <option value="3692">高新区</option>
                                            <option value="3703">都江堰市</option>
                                            <option value="3705">邛崃市</option>
                                            <option value="3704">彭州市</option>
                                            <option value="3706">金堂县</option>
                                            <option value="3697">双流县</option>
                                            <option value="3707">大邑县</option>
                                            <option value="3708">蒲江县</option>
                                            <option value="3711">新津县</option>
                                            <option value="3665">青羊区</option>
                                            <option value="3672">青白江区</option>
                                            <option value="3696">高新西区</option>
                                            <option value="3702">郫县</option>
                       </select>
                    
<select name="street" id="selStreet_0">
                  <option value="0">请选择街道</option>
                  </select>
                  (必填) </td>
                </tr>
                <tr>
                  <td align="right" bgcolor="#ffffff">收货人姓名：</td>
                  <td align="left" bgcolor="#ffffff"><input name="consignee" type="text" class="inputBg" id="consignee_0" value="">
                  (必填) </td>
                  <td align="right" bgcolor="#ffffff">电子邮件地址：</td>
                  <td align="left" bgcolor="#ffffff"><input name="email" type="text" class="inputBg" id="email_0" value="0">
                  (必填)</td>
                </tr>
                <tr>
                  <td align="right" bgcolor="#ffffff">详细地址：</td>
                  <td align="left" bgcolor="#ffffff"><input name="address" type="text" class="inputBg" id="address_0" value="">
                  (必填)</td>
                  <td align="right" bgcolor="#ffffff">邮政编码：</td>
                  <td align="left" bgcolor="#ffffff"><input name="zipcode" type="text" class="inputBg" id="zipcode_0" value=""></td>
                </tr>
                <tr>
                  <td align="right" bgcolor="#ffffff">电话：</td>
                  <td align="left" bgcolor="#ffffff"><input name="tel" type="text" class="inputBg" id="tel_0" value="">
                  (必填)</td>
                  <td align="right" bgcolor="#ffffff">手机：</td>
                  <td align="left" bgcolor="#ffffff"><input name="mobile" type="text" class="inputBg" id="mobile_0" value=""></td>
                </tr>
               
                <tr>
                  <td align="right" bgcolor="#ffffff">&nbsp;</td>
                  <td colspan="3" align="center" bgcolor="#ffffff">                    <input type="submit" name="submit" class="bnt_blue_2" value="新增收货地址">
                                        <input type="hidden" name="act" value="act_edit_address">
                    <input name="address_id" type="hidden" value="">
                  </td>
                </tr>
              </tbody></table>
            </form>
             </div></div></div></div></div>        

	
</div>

</template>

<script scope>


        
</script>
<style >

</style>
