<template>
	<section class="content-wrap">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="订单id"
      width="100">
    </el-table-column>
    <el-table-column
      prop="date"
      label="订单时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="goodsname"
      label="商品名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话号码"
      width="100">
    </el-table-column>
    <el-table-column
      prop="shipaddress"
      label="地址"
      width="260">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="230">
    </el-table-column>
     <el-table-column
      prop="username"
      label="用户名"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">

        <el-button  type="text" size="small" @click="sendgoods(scope.row.id)">{{sendgoodbtn}}</el-button>
      </template>
    </el-table-column>
  </el-table>
	</section>
</template>

<script>


	export default {
  created(){
    this.OrderList()
  },
  data() {
    return {
      tableData:[],
      recordsTotal:'',//总数
      sendgoodbtn:'我要发货'
    }
  },
  
  methods:{
    OrderList(){
      var _this=this
      this.$http.post(IP+'/bonsai/orders/listSell',
      {   
        
          pageNum:0,
          pageSize:50,
          sellid:parseInt(this.$store.state.currentdata.UserId)
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
              var items=data.items
            
              for (var i = 0; i <items.length; i++) {
                 _this.tableData.push({
                     "id":items[i].id,
                     "date":items[i].date,
                     "goodsname":items[i].goodsname,
                     "mobile":items[i].mobile,
                     "shipaddress":items[i].shipaddress+items[i].dispatchingaddress,
                     "price":items[i].price,
                     "username":items[i].username,
                  })
              }
                 
                  }
             
                 
            })
        
        .catch(function(){
          alert("出错啦")
        })
    },
    sendgoods(id){
      var r=confirm("确定要发货吗？")
      if (r) {
        this.$http.post(IP+'/bonsai/orders/update',
      {   
        
          state:1,
          id:id,
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{

          
            alert(response.body.message)
            this.sendgoodbtn="发货成功"
            
             
                 
            })
        
        .catch(function(){
          alert("出错啦")
        })
      }
    },
    }
   
  
	
	}

</script>

<style scoped>
section.content-wrap{
  position: relative;
}

</style>