<template>
	<div id="header">
		<div class="logo">
			盆景网站后台管理
			<!-- <span>sx</span> -->
			<span v-show="isAdmin">[管理员]</span>
		</div>
		<div class="user">
			
			{{name}}
		</div>
		<router-link to="/"><div class="exit">退出</div></router-link>
	</div>
</template>

<script>

export default {
	
	data() {
		return {
			
			isAdmin:'ture',
			name: ''
		}
	},
	created() {
		
	},
	methods: {
		
		
	}
}
</script>

<style scoped>
a{
	color: #fff;
}
#header{
	position: relative;
	height: 80px;
	line-height: 80px;
	
	padding: 0 20px;
	justify-content: space-between;
	z-index: 12;
}
.logo{
	position: absolute;
	left:150px;
	font-size: 26px;
	font-weight: 600;
}
.logo span{
	font-size: 16px;
	margin-left: 15px;
}
.user{
	font-size: 16px;
}

#header .exit{
	position: absolute;
width: 50px;
	height: 50px;
	border-radius: 50%;
	vertical-align: middle;
	right: 150px;
	font-size: 20px;
}

</style>