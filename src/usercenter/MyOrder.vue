<template>
<div class="MyOderView">
	<div class="AreaR">
    <div class="box">
     <div class="box_1">
      <div class="userCenterBox boxCenterList clearfix" style="_height:1%;">
         
              
        
      
              <h5><span style="color:#666666;">我的订单</span></h5>
       <div class="blank"></div>
       <table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
          <tbody><tr align="center">
            <td bgcolor="#ffffff">订单号</td>
            <td bgcolor="#ffffff">下单时间</td>
            <td bgcolor="#ffffff">订单总金额</td>
            <td bgcolor="#ffffff">订单状态</td>
            <td bgcolor="#ffffff">操作</td>
          </tr> 
          <tr v-for="item in tableData" align="center">
            <td bgcolor="#ffffff">{{item.id}}</td>
            <td bgcolor="#ffffff">{{item.date}}</td>
            <td bgcolor="#ffffff">{{item.price}}</td>
            <td bgcolor="#ffffff" v-if="item.state==0">还未发货</td>
            <td bgcolor="#ffffff" v-if="item.state!=0">发货中</td>
            <td bgcolor="#ffffff" v-if="item.state==0"><button  @click="backgood(item.id)">退货</button></td>
            <td bgcolor="#ffffff" v-if="item.state!=0"><button  @click="hasRecived(item.id,item.goodsnumber)">{{hasgoods}}</button></td>

          </tr>
          <tr v-if="tableData==[]">暂无订单</tr>
          </tbody>

        </table>
        <div class="blank5"></div>
      </div>
     </div>
    </div></div>
	
</div>

</template>

<script scope>
export default {
  
  data() {
    return {
       tableData:[],
        hasgoods:"已收到货"
    }
  },
  created(){
      this.lookOrders()
  },
  methods:{
    
    lookOrders(){
      var _this=this 
     
      this.$http.post(IP+'/bonsai/orders/listBuy',
      {   

          pageNum:0,
          pageSize:50,
          buyid:parseInt(this.$store.state.currentdata.UserId)
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
           if (response.body.code=='11') {
            alert(response.body.message)
           }
            if (response.body.code == '00') {
              var data=response.body.data
              
                  _this.tableData=data.items
                 
           
                 
            }
        })
        .catch(function(){
          alert("出错啦")
        })
     
    },
    //退货
    backgood(ids){
        var r=confirm("确定要退货吗?")
        if (r) {
          var _this=this 
     
      this.$http.post(IP+'/bonsai/orders/delete',
      {   

         ids:[ids],
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
           if (response.body.code=='11') {
            alert(response.body.message)
           }
            if (response.body.code == '00') {
               alert(response.body.message)
                 
            }

        })
        .catch(function(){
          alert("出错啦")
        })
     
        }
    },
    //已经收到货
    hasRecived(orderid,goodid){
      var r=confirm("确定收到了货?")
      if (r) {
      var _this=this
     $.ajax({
   url:IP+'/bonsai/goods/get/'+goodid,
   
    
    type: 'GET',
    async:false,
    dataType: 'json',
   
  success:function(data){
    if (data.code == '00') {
              var data=data.data
              _this.$store.state.soldnumber=parseInt(data.soldnumber)//销售数量
              _this.$store.state.storage=parseInt(data.storage)//库存数量   
              //console.log("soldnumber"+soldnumber)              
            }
        
  },
  error:function() {
  alert("服务器内部错误")
  }
  },
  );
 
      this.$http.post(IP+'/bonsai/goods/update',
      {
          'id':goodid,
          'storage':parseInt(_this.$store.state.storage)-1,
          'soldnumber':parseInt(_this.$store.state.soldnumber)+1,
          'userId':_this.$store.state.currentdata.UserId,
          
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                alert(response.body.message+"交易成功")
                _this.hasgoods="交易已经成功"
               
           }  
        })
        .catch(function(){
          alert("出错啦")
        })
    }
}
  },
  
}
  
  

        
</script>
<style scoped>

</style>
