<template>
	<section class="content-wrap">
		
		
		<!-- 商品的添加 -->
		<el-table
    :data="tableData"
    border
    style="width: 100%" class="tb-edit" highlight-current-row>
    <el-table-column
      prop="productId"
      label="商品id"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productId" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productId}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="productName"
      label="商品名"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productName" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productName}}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      prop="productstora"
      label="商品库存"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productstora" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productstora}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="productPrice"
      label="商品价格"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productPrice" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productPrice}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="productPic"
      label="商品图片"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productPic" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productPic}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="productSell"
      label="商品销量"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productSell" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productSell}}</span>
      </template>
    </el-table-column>
     <el-table-column
      prop="productType"
      label="商品类别"
      width="160">
      <template scope="scope">
                    <el-input size="small" v-model="scope.row.productType" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.productType}}</span>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">

        <el-button @click="handleDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
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
                		"productId":data[i].id||"暂无",
                		"productName":data[i].goodsname||"暂无",
                		"productstora":data[i].storage||"暂无",
                		"productPrice":data[i].price||"暂无",
                		"productPic":data[i].pictures||"暂无",
                    "productSell":data[i].soldnumber||"暂无",
                		
                		"productType":data[i].type==0?"小型室内盆景":"吸甲醛的室内盆景",
                    "detail":data[i].detail,
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
		},
    //删除
    handleDelete(index,row){
        var r=confirm("确认删除本条信息吗？")
        if(r){
        var _this=this
      this.$http.post(IP+'/bonsai/goods/delete',
      {
          'ids':[row.productId]
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                alert(response.body.message)
                _this.tableData.splice(index,1) 
           }  
        })
        .catch(function(){
          alert("出错啦")
        })
        }
    },
    //修改商品
    handleEdit(index, row) {
         var r=confirm("确认修改该商品吗？")
        if(r){
        var _this=this
      this.$http.post(IP+'/bonsai/goods/update',
      {
          'id':row.productId,
          'goodsname':row.productName,
          'detail':row.detail,
          'price':row.productPrice,
          'pictures':row.pictures,
          'storage':row.productstora,
          'soldnumber':row.productSell,
          'userId':_this.$store.state.currentdata.UserId,
          'type':row.productType,
      },
      {
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                alert(response.body.message)
                $(".tb-edit .current-row .cell span").css({
                  display: 'block',
                })
                $(".tb-edit .current-row .el-input").css({
                  display: 'none',
                });
               
           }  
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
.tb-edit .el-input {
    display: none
}
.tb-edit .current-row .el-input {
    display: block
}
.tb-edit .current-row .el-input+span {
    display: none
}
.tb-edit .current-row .el-input {
  color: #000;
}
</style>