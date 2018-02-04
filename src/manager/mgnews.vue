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
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
		
	</section>
</template>

<script>

export default {
	
	data() {
		return {
			tableData: [{
          newsTitle:'llliiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
        },],
			page:'1',//默认获取第一页数据
			userList: '',//所有用户信息
			
		}
	},
	created() {
		this.UserList()
	},
	methods: {
		UserList() {
			
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

</style>