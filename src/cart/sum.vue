<template>
<div class="sumView">
  <div class="block box">
<div class="blank"></div>
 <div id="ur_here">
当前位置:  <code>&gt;</code> 购物流程 
</div>
</div>
<div class="blank"></div>
<div class="blank"></div>

<div class="block">
      <div class="flowBox">
<h6><span>收货人信息</span></h6>
<table width="99%" align="center" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
    
  <tbody><tr>
    <td bgcolor="#ffffff">配送地址:</td>
    <td colspan="3" bgcolor="#ffffff">
       <input type="text" name="country" id="selCountries_0" v-model="shipaddress">
   (必填) </td>
  </tr>
    <tr>
    <td bgcolor="#ffffff">收货人姓名:</td>
    <td bgcolor="#ffffff"><input name="consignee" type="text" class="inputBg" id="consignee_0" v-model="username">
    (必填) </td>
    <td bgcolor="#ffffff">电子邮件地址:</td>
    <td bgcolor="#ffffff"><input name="email" type="text" class="inputBg" id="email_0" v-model="email">
    (必填)</td>
  </tr>
    
   <tr>
    <td bgcolor="#ffffff">详细地址:</td>
    <td bgcolor="#ffffff"><input name="address" type="text" class="inputBg" id="address_0" v-model="dispatchingaddress">
    (必填)</td>
    <td bgcolor="#ffffff">邮政编码:</td>
    <td bg color="#ffffff"><input name="zipcode" type="text" class="inputBg" id="zipcode_0" v-model="postalcode"></td>
  </tr>
    <tr>
    <td bgcolor="#ffffff">电话:</td>
    <td bgcolor="#ffffff"><input name="tel" type="text" class="inputBg" id="tel_0" v-model="telephone">
    (必填)</td>
    <td bgcolor="#ffffff">手机:</td>
    <td bgcolor="#ffffff"><input name="mobile" type="text" class="inputBg" id="mobile_0" v-model="mobile"></td>
  </tr>
    
 
    <tr>
    <td colspan="4" align="center" bgcolor="#ffffff">
    <input type="submit" name="Back" class="bnt_blue_1" value="返回" @click="Back">
    <input type="submit" name="Submit" class="bnt_blue_2" value="提交订单" @click="OrderSubmit">
            
      </td>
  </tr>
</tbody></table>
</div>
</div></div>

</template>

<script scope>
export default{
    data() {
        return {
            shipaddress:'',//配送地址
            username:'',//姓名
            mobile:'',//手机
            telephone:'',//电话
            email:'',//邮箱
            dispatchingaddress:'',//详细配送地址
            postalcode:'',//邮编
        }
    },
    created() {
       
    },
    methods: {
        Back(){
            this.$router.go(-2)
        },
        OrderSubmit(){

                var _this=this
            this.$http.post(IP+'/bonsai/orders/add',
            {   
                sellid:_this.$route.query.sellerId,
                buyid:this.$store.state.currentdata.UserId,
                goodsname:_this.$route.query.goodsname, 
                price:_this.$route.query.price,
                describe:_this.$route.query.detail, 
                goodsnumber:_this.$route.query.productId, 
                pictures:"https://192.23.34.123/image/12.npg", 
                username:_this.username, 
                shipaddress:_this.shipaddress, 
                mobile:_this.mobile,
                telephone:_this.telephone,
                email:_this.email,
                dispatchingaddress:_this.dispatchingaddress,
                postalcode:_this.postalcode,
                state:0,//0表示还未发货，1表示已发货
            },
            {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
            if (response.body.code==11) {
                alert(response.body.message)
            }
            if (response.body.code == '00') {
                alert("恭喜您，提交订单成功,请耐心等待发货")
                 
            }
        })
        .catch(function(){
          alert("出错啦")
        })
            },
        
    }
}

        
</script>
<style scoped>
.flowGoodsFittings{padding:10px;}
    .flowGoodsFittings ul{height:1%; margin:5px 4px; float:left;}
    .flowGoodsFittings li{float:left; width:120px;}
    .flowGoodsFittings li.goodsimg{width:48px; margin-right:10px;}
    .flowGoodsFittings li.goodsimg img{width:48px; height:48px; display:block;}
    .flowBox{margin-bottom: 300px;}
    tbody tr td{
        font-size: 12px;
        padding-left: 122px;
    }
    .bnt_blue_1,.bnt_blue_2{
        margin-top: 30px;
        margin-right: 30px;
    }
</style>
