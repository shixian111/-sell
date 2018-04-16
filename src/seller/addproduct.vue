<template>
	<section class="content-wrap">
    <span class="comments-button gv" @click="Toback">返回</span>
    <div class="leftimg">
       <img src="../assets/images/seller/addimg.png">
    </div>
    <div class="rightinfo">
    <div><span>商品名:</span><input v-model="goodsname"/></div>
    <div><span>商品描述:</span><input v-model="detail"/></div>
    <div><span>商品价格:</span><input v-model="price"/></div>
    <div><span>商品库存:</span><input v-model="storage"/></div>
    <div> <form action="" method="get">
                            <label><input name="zuce" type="radio" v-model="type" value="0"/>小型室内植物</label>
                            <label><input name="zuce" type="radio" v-model="type" value="1" />吸甲醛的盆景植物</label></form>
                       </div>	
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
      type:'0',//0代表小型室内植物，默认为0，1代表吸甲醛的盆景
    }
  },
  
  methods:{
    Toback(){
      this.$router.go(-1)
    },
    addProduct(){
      var _this=this 
     // console.log(_this.type)
      this.$http.post(IP+'/bonsai/goods/add',
      {
        'goodsname':_this.goodsname,
        'detail':_this.detail,
        'price':_this.price,
        'pictures':'https://192.23.34.123/images/12.png',
        'storage':_this.storage,
        'soldnumber':'33',
        'userid':_this.$store.state.currentdata.UserId,
        'type':_this.type,//0代表小型室内盆景植物，1代表吸甲醛的盆景植物
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                alert(response.body.message)
               
                
                }
               else if(response.body.code == '11')  
               {
                alert(response.body.message)
               }
            else if(response.body.code == '05')  
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
  margin-top:117px;
  float: left;
}
.leftimg img{
  width:300px;
  height:300px;
}
.rightinfo{
  margin-left: 90px;
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