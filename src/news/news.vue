<template>

<div class="newsView">
	<!-- 新闻动态*****************************************************************************-->
			<div class="all">
				<div class="allist">
					<div class="allisttit newstit"></div>
					<ul class="listnav"></ul>
				</div>
				<div class="allcon">
					<div class="adress">
						<div class="adrname">新闻动态</div>
						<div class="adrmbx">
							当前位置：
							<router-link to="/nav/index"><a >主页</a></router-link>
							&gt;
							<router-link to="/nav/news"><a >新闻动态</a></router-link>
							&gt;
						</div>
					</div>
					<div class="allmain">
						<div class="allmaintit">
							<span class="cn">新闻动态</span>
							<span class="eg">INDUSTRY NEWS</span>
						</div>
						<ul class="newslist" v-for="(item,index) in tableData">
							<!-- <router-link  to="/nav/news/newsinfo"> -->
							<li>
								<a href="#" class="newsword" @click="checkDetail(item.newsId)">{{item.newsTitle}}</a>
								<span class="newstime">{{item.newstime | time}}</span>
							</li><!-- </router-link> -->
							<!-- <li>
								<a href="#" class="newsword">办公室摆放绿植的风水三点常见风</a>
								<span class="newstime">2017-06-20</span>
							</li>
							<li>
								<a href="#" class="newsword">为你推荐办公室七大绿色植物！</a>
								<span class="newstime">2017-06-19</span>
							</li>
							<li>
								<a href="#" class="newsword">家庭插花的常见形式介绍</a>
								<span class="newstime">2017-06-17</span>
							</li>
							<li>
								<a href="#" class="newsword">石吊兰的栽培繁殖方法</a>
								<span class="newstime">2017-06-17</span>
							</li>
							<li>
								<a href="#" class="newsword">豆蔻的繁殖方法及注意事项</a>
								<span class="newstime">2017-06-16</span>
							</li>
							<li>
								<a href="#" class="newsword">迎春花的修剪心得</a>
								<span class="newstime">2017-06-16</span>
							</li>
							<li>
								<a href="#" class="newsword">平安树出现叶片发黄的解决方法</a>
								<span class="newstime">2017-06-15</span>
							</li> -->
						

						</ul>
						<!--分页-->
						<div class="fy">
							<li>首页</li>
							<li class="thisclass">1</li>
							<li>
								<a href="#">2</a>
							</li>
							
							<li>
								<a href="#">下一页</a>
							</li>
							<li>
								<a href="#">末页</a>
							</li>
							<li>
								<select name="sldd" style="width:42px" onchange="location.href=this.options[this.selectedIndex].value;">
									<option value="#" selected="">1</option>
									
									
								</select>
							</li>
						</div>
						<!--分页-->
					</div>
				</div>
			</div>
<!-- <IndexComponent :newsData="tableData"></IndexComponent> -->
</div>

</template>

<script >
// import IndexComponent from '../index/index.vue'
export default {
	// components:{
	// 	IndexComponent
	// },
	data() {
		return {
			tableData: [],
			page:'1',//默认获取第一页数据
			
			
		}
	},
	 filters: {
    time(value) {
      return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    }
  },
	created() {
		this.UserList()
	},
	methods:{
		UserList() {
			var _this=this
			this.$http.get(IP+'/bonsai/news/list/'+_this.page+'/8',
			
			{
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
                var data=response.body.data.items
                
                for (var i = 0; i < data.length; i++) {
                	_this.tableData.push({
                        "newsId":data[i].id,
                		"newsTitle":data[i].newstitle,
                		"newstime":data[i].newtime,
                		})
                }
                 
            }
        })
        .catch(function(){
          alert("出错啦")
        })
		},
		//查看新闻详情
		checkDetail(newsId){
			this.$router.push({path: '/nav/news/newsinfo', query: {newsId}})
		}
	}
}
        
</script>
<style scoped>

/*行业新闻的主体部分的列表*/
.newslist {
  width: 780px;
  float: left;
  margin-top: 30px;
}

.newslist li {
  width: 780px;
  height: 40px;
  float: left;
  border-bottom: 1px dotted #C1C1C1;
}
/*行业新闻的主体部分的题目*/
.newsword {
  width: 465px;
  height: 40px;
  float: left;
  margin-left: 10px;
  line-height: 40px;
  padding-left: 20px;
  background: url(../assets/images/news_href/right_23.jpg) no-repeat left;
  color: #000000;
  font-family: "宋体";
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/*行业新闻的主体部分的时间*/
.newstime {
  height: 40px;
  float: right;
  line-height: 40px;
  color: #000000;
  font-family: "宋体";
  font-size: 14px;
  padding-right: 10px;
}

.newslist li:hover .newsword {
  color: #FF0000;
  background: url(../assets/images/news_href/right_20.jpg) no-repeat left;
}

.newslist li:hover .newstime {
  color: #FF0000;
}
/*分页*/
.fy {
  width: 100%;
  float: left;
  margin-top: 50px;
}
.fy li{ list-style-type:none; float:left; margin-left:10px; padding-left:3px; padding-right:3px; display:block;}
.fy li a:link { color:#000;}
.fy li a:visited { color:#000;}
.fy li a:hover{ color:#060;}



</style>
