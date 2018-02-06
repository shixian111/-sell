<template>
	<section class="content-wrap">
    <div class="leftimg">
       <img src="../assets/images/seller/addimg.png">
    </div>
    <div class="rightinfo">
    <div><span>商品名:</span><input v-model="goodsname"/></div>
    <div><span>商品描述:</span><input v-model="detail"/></div>
    <div><span>商品价格:</span><input v-model="price"/></div>
    <div><span>商品库存:</span><input v-model="storage"/></div>
    <div><span>商品类别:</span><input v-model="type"/></div>	
    <span class="comments-button gv" @click="addProduct">添加商品</span>
  </div>
    
	</section>
</template>

<script>


	export default {
  
  data() {
    return {
      goodsname:'',
      detail:'',
      price:'',
      storage:'',
      type:'',
    }
       
  },
  methods:{
    addProduct(){
      var _this=this
      this.$http.post(IP+'/bonsai/goods/add',
      {
        'goodsname':_this.goodsname,
        'detail':_this.detail,
        'price':_this.price,
        'pictures':'https://192.23.34.123/images/12.png',
        
        'storage':_this.storage,
        'soldnumber':'33',
        'userid':this.$store.state.currentdata.UserId,
        'type':_this.type,
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                alert("message")
                }
               else if(response.body.code == '11')  
               {
                alert(response.body.message)
               }
            
        })
        .catch(function(){
          alert("出错啦")
        })
    }
  }
  
}
	
	

</script>

<style scoped>
.leftimg{
  margin-top:89px;
  float: left;
}
.rightinfo{
  margin-left: 30px;
  margin-top:139px;
  float: left;
}
.rightinfo div{
  font-size: 20px;
  width:500px;
  height:60px;
}
.rightinfo div input{
  float: right;
  border-radius: 10px;
  color: #000;
}
.gv {
  text-decoration: none;
    background: url('../assets/images/manager/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
}
.gv:hover { 
  background: url('../assets/images/manager/nav_gv.png') repeat 0px -43px; 
  color:#1d7eb8;
  -webkit-box-shadow: 0 0 6px #1d7eb8;
  transition-duration: 0.5s;
}
</style>