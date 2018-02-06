<template>
	<section class="content-wrap">
		
		
		<!-- 商品的添加 -->
		<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="productId"
      label="商品id"
      width="160">
    </el-table-column>
    <el-table-column
      prop="productName"
      label="商品名"
      width="160">
    </el-table-column>
    
    <el-table-column
      prop="productstora"
      label="商品库存"
      width="160">
    </el-table-column>
    <el-table-column
      prop="productPrice"
      label="商品价格"
      width="160">
    </el-table-column>
    <el-table-column
      prop="productPic"
      label="商品图片"
      width="160">
    </el-table-column>
    <el-table-column
      prop="productSell"
      label="商品销量"
      width="160">
    </el-table-column>
     <el-table-column
      prop="productType"
      label="商品类别"
      width="160">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">

        <el-button @click="handleDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
         <el-button @click="handleDelete(scope.$index,scope.row)" type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
		
<div class="comments-button gv" @click="addProduct">添加商品</div>
	</section>
</template>

<script>

export default {
	
	data() {
		return {
			tableData: [],
		}
			 
	},
	created(){
         this.ProductList()
	},
	methods:{
		ProductList(){
			var _this=this
			this.$http.post(IP+'/bonsai/goods/list',
			{
				'pageNum':1,
				'pageSize':12,
				'userId':this.$store.state.currentdata.UserId,
			},
			{
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                var data=response.body.data.items
                for (var i = 0; i < data.length; i++) {
                	_this.tableData.push({
                		"username":data[i].username||"暂无",
                		"cname":data[i].cnname||"暂无",
                		"flagrole":data[i].flagrole||"暂无",
                		"mobile":data[i].mobile||"暂无",
                		"address":data[i].address||"暂无",
                		"email":data[i].email||"暂无",
                		"id":data[i].id||"暂无",
                		})
                }
                 
            }
        })
        .catch(function(){
          alert("出错啦")
        })
        
		},
		//点击添加商品
		addProduct(){
			this.$router.push({path:'/mg/Home/addproduct'})
		}
	}
	
}
</script>

<style scoped>
section.content-wrap{
	position: relative;
}
.content-wrap thead tr th{
	font-size: 16px;
	padding-left:40px;
}
.comments-button{
	z-index:999;
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
.el-dialog__wrapper{
	width:500px;
	height: 600px;
	margin: 0 auto;
	text-align: center;
}
</style>