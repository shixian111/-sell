<template>
	<section class="content-wrap">
		<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="cname"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="flagrole"
      label="角色"
      width="100">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话号码"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="260">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="230">
    </el-table-column>
     <el-table-column
      prop="id"
      label="用户id"
      width="100">
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
		
	</section>
</template>

<script>

export default {
	
	data() {
		return {
			tableData: [],
			page:'1',//默认获取第一页数据
			userList: '',//所有用户信息
			
		}
	},
	created() {
		this.UserList()
	},
	methods: {
		UserList() {
			var _this=this
			this.$http.get(IP+'/bonsai/user/list/'+_this.page+'/6',
			
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
	        //删除某个用户
	     handleDelete(index,row) {
	     	var _this=this
       console.log(index)
       console.log(_this.tableData[index])
        var r=confirm("您确定要删除吗？")
        if (r) {
        
			this.$http.post(IP+'/bonsai/user/delete',
			{
				"ids":[row.id]
			},
			{
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                alert("恭喜您,删除成功")
               _this.tableData.splice(index,1)
            }
        })
        .catch(function(){
          alert("出错啦")
        })}
        
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
</style>