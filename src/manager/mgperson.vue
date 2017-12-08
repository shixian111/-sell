<template>
	<section class="content-wrap">
		<table style="top: 50px;">
			<thead>
				<tr>
					<th v-for="item in thead">
						{{item}}
					</th>
				</tr>
			</thead>
			<tbody>				
				<tr v-for="(item,index) in userList">
					<td>
						{{++index}}
					</td>
					<td>
						{{item.username}}
					</td>
					<td>
						{{item.sex}}
					</td>
					<td>
						{{item.password}}
					</td>
					<td>
						{{item.bdate}}
					</td>
					<td>
						{{item.email}}
					</td>
					<td>
						{{item.address}}
					</td>
					<td>
						{{item.phone}}
					</td>
					<td>
						{{item.zdate}}
					</td>
					<td>
						{{item.deletep}}
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>

export default {
	
	data() {
		return {
			userList: '',
			thead: ['编号', '姓名', '性别',  '密码', '出生日期','邮箱', '通信地址', '电话号码','注册日期','操作用户']
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
	padding-left:40px;
}
</style>