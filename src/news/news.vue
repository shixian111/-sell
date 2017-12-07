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
						<ul class="newslist">
							<router-link  to="/nav/news/newsinfo">
							<li>
								<a href="#" class="newsword">多肉植物夏季如何正确的浇水</a>
								<span class="newstime">2017-06-20</span>
							</li></router-link>
							<li>
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
							</li>
						

						</ul>
						<!--分页-->
						<div class="fy">
							<li>首页</li>
							<li class="thisclass">1</li>
							<li>
								<a href="#">2</a>
							</li>
							<li>
								<a href="#">3</a>
							</li>
							<li>
								<a href="#">4</a>
							</li>
							<li>
								<a href="#">5</a>
							</li>
							<li>
								<a href="#">6</a>
							</li>
							<li>
								<a href="#">7</a>
							</li>
							<li>
								<a href="#">8</a>
							</li>
							<li>
								<a href="#">9</a>
							</li>
							<li>
								<a href="#">10</a>
							</li>
							<li>
								<a href="#">11</a>
							</li>
							<li>
								<a href="#">12</a>
							</li>
							<li>
								<a href="#">13</a>
							</li>
							<li>
								<a href="#">14</a>
							</li>
							<li>
								<a href="#">15</a>
							</li>
							<li>
								<a href="#">16</a>
							</li>
							<li>
								<a href="#">17</a>
							</li>
							<li>
								<a href="#">18</a>
							</li>
							<li>
								<a href="#">19</a>
							</li>
							<li>
								<a href="#">20</a>
							</li>
							<li>
								<a href="#">21</a>
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
									<option value="#">2</option>
									<option value="#">3</option>
									<option value="#">4</option>
									<option value="#">5</option>
									<option value="#">6</option>
									<option value="#">7</option>
									<option value="#">8</option>
									<option value="#">9</option>
									<option value="#">10</option>
									<option value="#">11</option>
									<option value="#">12</option>
									<option value="#">13</option>
									<option value="#">14</option>
									<option value="#">15</option>
									<option value="#">16</option>
									<option value="#">17</option>
									<option value="#">18</option>
									<option value="#">19</option>
									<option value="#">20</option>
									<option value="#">21</option>
									<option value="#">22</option>
									<option value="#">23</option>
									<option value="#">24</option>
									<option value="#">25</option>
									<option value="#">26</option>
									<option value="#">27</option>
									<option value="#">28</option>
									<option value="#">29</option>
									<option value="#">30</option>
									<option value="#">31</option>
									<option value="#">32</option>
									<option value="#">33</option>
									<option value="#">34</option>
									<option value="#">35</option>
								</select>
							</li>
						</div>
						<!--分页-->
					</div>
				</div>
			</div>

</div>
</template>

<script scope>


        
</script>
<style >
@import '../assets/css/style.css'
</style>
