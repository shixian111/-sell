<template>
	<section class="content-wrap">
		
		<div class="comments-wrap">
			<!-- <div class="avatar"></div> -->
			<div class="comments-header">
				<input placeholder="填写新闻标题！" v-model="newstitle">
			</div>
			<div class="comments-content">
				<textarea name="" id="" cols="85" rows="5" placeholder="填写新闻内容！" v-model="newscontent"></textarea>
				<div class="comments-button gv" @click="addCommen()">发布新闻</div>
			</div>
		</div>

	</section>
</template>

<script>

export default {
	
	data() {
		return {
			msgboardList: '',
			newscontent: '',//新闻内容
			newstitle: '',//新闻标题
		}
	},
	filters: {
		time(value) {
			return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
		}
	},
	created() {
		this.showlist()
	},
	methods: {
		showlist() {
			
			
		},
		addCommen() {
			var _this=this
			this.$http.post(IP+'/bonsai/news/add',{
                  'newstitle':_this.newstitle,
                  'newscontent':_this.newscontent,
                  'newpicture':'',
                  'newspush':'admin'
        }, {
          
          'headers': {
            'Content-Type': 'application/json',
        }
        })
        .then((response)=>{
           if (response.body.code == '00') {
                alert(response.body.message)
                _this.newstitle=''
                _this.newscontent=''
            }
        })
        .catch(function(){
          alert("出错啦")
        })
			
		}
	}
}
</script>

<style scoped>
section.content-wrap{
	position: relative;
	/*width: 100%;*/
	/*height: 660px;*/
}

.comments-wrap{
	/*display: flex;*/
	margin-left: 50px;
	margin-top: 30px;
}

/*.avatar{
	width: 50px;
	height: 50px;
	margin: 0 20px;
	border-radius: 50%;
	background: url('../assets/images/manager/avatar.jpg') no-repeat;
	background-size: cover;
}*/
.comments-content{
	position: relative;
}
.comments-header input{
	/*display: inline-block;*/
	width: 55%;
border: none;
	border-radius: 10px;
	overflow: hidden;
    resize: none;
    outline: none;
    overflow: auto;
    padding: 4px;
    margin-bottom: 25px;
    font-size: 12px;
    color: #000;
}
.comments-content textarea{
	 color: #000;
	width: 92%;
	height:450px;
	border: none;
	border-radius: 10px;
	overflow: hidden;
    resize: none;
    outline: none;
    overflow: auto;
    padding: 10px;
    font-size: 16px;
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
.comments-button{
	position: absolute;
	right:95px;
	top: 500px;
}

.comments-list{
	position: relative;
	border-top: 1px solid #fff;
	width: 90%;
	margin: 20px 0 50px 40px;
	padding-left: 50px;
}
.lifeline{
	position: absolute;
	/* min-height: 300px; */
	height: 100%;
	top: 20px;
	left: 200px;
	width: 2px;
	background: rgba(7,17,27,1);
}

.comments-item{
	margin-left: 200px;
	padding-top: 40px;
	position: relative;
}
.comments-item::before{
	content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background: rgba(7,17,27,1);
    border: 2px solid #fff;
    left: -56px;
    top: 50px;
}

.dateview{
	position: absolute;
    left: -215px;
    top: 50px;
    z-index: 1;
    font-size: 14px;
    color: #F5F5F5;
}
.comment{
	
}
.comment .name {
	line-height: 30px;
	font-size: 18px;
}
</style>