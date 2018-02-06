<template>
	<section class="content-wrap">
		
		<div class="comments-wrap">
			<a class="gv" @click="Toback()"> 返回</a>
			<!-- <div class="avatar"></div> -->
			<div class="comments-header">

				<span>{{newstitle}}</span>
			</div>
			<div class="comments-content">
				<span>{{newscontent}}</span>
				<!-- <div class="comments-button gv" @click="modify()">修改新闻</div> -->
			</div>
		</div>

	</section>
</template>

<script>

export default {
	
	data() {
		return {
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
			var _this=this
			this.$http.get(IP+'/bonsai/news/get/'+_this.$store.state.setNewsID+'', {
          
          'headers': {
            'Content-Type': 'application/json',
        }
        })
        .then((response)=>{
           if (response.body.code == '00') {
                _this.newstitle=response.body.data.newstitle
                _this.newscontent=response.body.data.newscontent
                
            }
        })
        .catch(function(){
          alert("出错啦")
        })
			
		},
		//修改新闻
		modify() {
			var _this=this
		// 	this.$http.post(IP+'/bonsai/news/add',{
  //                 'newstitle':_this.newstitle,
  //                 'newscontent':_this.newscontent,
  //                 'newpicture':'',
  //                 'newspush':'admin'
  //       }, {
          
  //         'headers': {
  //           'Content-Type': 'application/json',
  //       }
  //       })
  //       .then((response)=>{
  //          if (response.body.code == '00') {
  //               alert(response.body.message)
  //               _this.newstitle=''
  //               _this.newscontent=''
  //           }
  //       })
  //       .catch(function(){
  //         alert("出错啦")
  //       })
			
		 },
		 Toback(){
		 	this.$router.go(-1)
		 }
	}
}
</script>
<style scoped>
section.content-wrap{
	position: relative;
}

.comments-wrap{
	/*margin-left: 20px;*/
	margin-top: 30px;
	margin-right: 15px;
}
.comments-wrap a{
	position: absolute;
	top:10px;

}
.comments-header{
	 margin-bottom: 25px;
	 	text-align: center;
}
.comments-header span{
	/*display: inline-block;*/
	width: 55%;
	overflow: hidden;   
    padding: 4px;
   
    font-size: 30px;
    color: #fff;
}
.comments-content{
	/*width: 82%;*/
	text-align: left;
}
.comments-content span{
	 color: #fff;
	
	height:450px;
	padding: 14px;
	overflow: hidden;
    font-size: 20px;
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


</style>