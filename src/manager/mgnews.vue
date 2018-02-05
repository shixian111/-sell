<template>
	<section class="content-wrap">
		<el-table
    :data="tableData"
    border
    style="width: 100%;padding:20px 0 20px 200px;">
    <el-table-column
      prop="newsTitle"
      label="新闻标题"
      width="520"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        <el-button type="text" size="small" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
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
			this.$http.get(IP+'/bonsai/news/list/'+_this.page+'/11',
			
			{
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                var data=response.body.data.items
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                	_this.tableData.push({
                		"newsTitle":data[i].newstitle||"暂无",
                		
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
        
			this.$http.post(IP+'/bonsai/news/delete',
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