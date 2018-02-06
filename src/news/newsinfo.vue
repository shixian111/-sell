<template>
<div class="newsinfoView">
	

            <div class="all">
				<div class="allist">
					<div class="allisttit casetit"></div>
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
							
						</div>
						<div class="casecon"> 
      <div class="casecont"> 
       <div class="casecontl"> 
        <span class="casecontname"><h1>{{newstitle}}</h1></span> 
        <span class="caseconttime">{{newstime | time}}</span>
       </div> 
       <div class="casecontr"> 
       	   <a  class="last" @click="Toback"></a> 
     <!--  <a href="case2.html" class="next"></a>  -->
       </div> 
      </div> 
      
    
      <div class="caseconmian"> 
       
       <p style="background:#FFFFFF;padding:36px;"></p><div>
	&nbsp;</div>
<div>
	<span style="font-size:14px;">{{newscontent}}</span><br>
	<br>
	&nbsp;</div>
<div style="text-align: center;">
	<img alt="" src="../assets/images/news_href/1-1F62014315DV.jpg" style="width: 750px; height: 532px;"><br>
	<br>
	&nbsp;</div>
<!-- <div>
	<span style="font-size:14px;">一般的多肉植物在夏季超过30度时，就会进入休眠期。大家在观看天气预报的时候，如果发现接下来的一周气温都要超过30度，那么大家一定要提前断水，多肉的肉质根和肉质叶，都会储存很多水分，所以不要担心肉肉会干死。如果是实在是干得不行了，可以在天气稍微凉爽的时候浇一点水，润润根。</span><br>
	<br>
	&nbsp;</div>
<div>
	<span style="font-size:14px;">大家经常用的浇水方法就是直接用花洒淋，这种方法虽然简单，但是很容易积水，大家都知道多肉一旦积水，就面临着可能会烂根的风险。所以大家在夏季一定要少浇水，并且不推荐使用喷壶或是花洒浇。</span><br>
	<br>
	&nbsp;</div>
<div style="text-align: center;">
	<span style="font-size:14px;"><img alt="" src="../assets/images/news_href/1-1F6201433051X.png" style="width: 750px; height: 498px;"></span><br>
	&nbsp;</div>
<div>
	&nbsp;</div>
<div>
	<span style="font-size:14px;">其实多肉浇水最好办法是直接浸盆，就是找一个盆接上水，把花盆直接浸在水里，使水直接从盆地吸收上去，这样能给土壤和根系补充水，而且还能防止积水，这个方法虽然有点累，但是效果很好。</span></div>
<div>
	&nbsp;</div> -->
 <p></p> 
      </div> 
     </div>
					</div>
				</div>
			</div>

	
</div>

</template>

<script>


export default{
components:{

},
data(){
	return{
      newscontent: '',//新闻内容
      newstitle: '',//新闻标题
      newstime:'',//时间
	}
},
created(){
  this.newsinfo()
},
filters: {
    time(value) {
      return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    }
  },
methods:{
  newsinfo(){
    // this.$route.query.name
    var _this=this
      this.$http.get(IP+'/bonsai/news/get/'+_this.$route.query.newsId+'', {
          
          'headers': {
            'Content-Type': 'application/json',
        }
        })
        .then((response)=>{
           if (response.body.code == '00') {
                _this.newstitle=response.body.data.newstitle
                _this.newscontent=response.body.data.newscontent
                _this.newstime=response.body.data.newtime
            }
        })
        .catch(function(){
          alert("出错啦")
        })
  },
  Toback(){
    this.$router.push({path:'/nav/news'})
  }
}
}
        
</script>
<style scoped>
/*caseinfo css*/
.casetit {
  background: url(../assets/images/news_href/case.gif) no-repeat;
}
.casecon {
  width: 780px;
  float: left;
  margin-top: 30px;
}
.casecont {
  width: 760px;
  height: 65px;
  padding: 0px 10px;
  float: left;
  border-bottom: 1px dotted #989898;
}

.casecontl {
  width: 630px;
  height: 65px;
  float: left;
}
.casecontname h1 { font-size:18px;}
.casecontname {
  width: 100%;
  height: 30px;
  float: left;
  line-height: 30px;
  color: #474747;
  font-size: 24px;
}
.caseconttime {
  width: 100%;
  height: 20px;
  float: left;
  line-height: 20px;
  color: #818181;
  font-size: 14px;
  font-family: "宋体";
}

.casecontr {
  width: 100px;
  height: 37px;

  float: right;
}
.last {
  width: 39px;
  height: 37px;
  float: right;
  background: url(../assets/images/news_href/casecon_03.gif) no-repeat;
}
.next {
  width: 39px;
  height: 37px;
  float: right;
  background: url(../assets/images/news_href/casecon_05.gif) no-repeat;
}
.caseconmian p {
  padding: 20px;
  line-height: 25px;
  color: #4A4A4A;
  font-size: 14px;
  font-family: "宋体";
  background: #F2F2F2;
} 
</style>