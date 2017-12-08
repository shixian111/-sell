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
	display: flex;
	padding: 0 20px;
	justify-content: space-between;
	z-index: 12;
}
.logo{
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
/*.user .avatar{
	/*position: absolute;*/
	/*width: 50px;
	height: 50px;
	border-radius: 50%;
	vertical-align: middle;
	right: 50px;*/
	/*margin-right: 10px;
}*/
/*.user .icon{
	width: 17px;
    height: 17px;
    margin-left: 5px;
    vertical-align: middle;
}*/
#header .exit{
width: 50px;
	height: 50px;
	border-radius: 50%;
	vertical-align: middle;
	right: 50px;
	font-size: 20px;
}
/*.user-x{
	position: absolute;
	right: 20px;
	top: 70px;
	width: 100px;
	height: 100px;
	z-index: 1000;
}
.user-x ul li{
	list-style: none;
	width: 100px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	cursor: pointer;
}
.user-x ul li a{
	display: block;
}
.user-x ul li:hover{
	background: rgba(7,17,27,.5);
}*/
</style>