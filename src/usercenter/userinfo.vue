<template>
<div class="userinfoView">

<div class="AreaR">
    <div class="box">
     <div class="box_1">
      <div class="userCenterBox boxCenterList clearfix" style="_height:1%;">
                    <h5><span>我的个人信息</span></h5>
          <div class="blank"></div>
          <button class="editinfo" @click="editinfo" v-show="!flag">编辑个人信息</button>
          <button class="editinfo" @click="editinfo" v-show="flag">正在编辑个人信息......</button>
          <div class="look" v-show="!flag">
            <div>我的姓名：{{cnname}}</div>                                  
               <div>我的邮箱：{{email}}</div>                                  
               <div>我的手机号：{{mobile}}</div>                                  
                                                
               <div>我的地址：{{address}}</div>                                  
               <div>我的用户名：{{username}}</div>  
          </div>
          <div class="edit" v-show="flag">
            <span class="error">{{ErrorTip}}</span>   
               <div>我的姓名：<input value="cnname" v-model="cnname"/></div>                                  
               <div>我的邮箱：<input value="email" v-model="email"/></div>                                  
              <div>我的手机号：<input value="mobile" v-model="mobile"/></div> 
               <div>我的地址：<input value="address" v-model="address"/></div>                                  
               <div>我的用户名：<input value="username" v-model="username"/></div> 
               <button class="save" @click="save">保存</button>                                 
               <button class="notsave" @click="notsave">不保存</button>                                 
            </div>                                 

        <div class="blank5"></div>
   
      
         
    
  
      </div>
     </div>
    </div>
  </div>

	
</div>

</template>

<script >
export default{
  data () {
      return {
        username:'',
        cnname:'',
        mobile:'',
        address:'',
        email:'',
        ErrorTip:'',
        flag:false,
      }
    },
    created(){
        this.userinfo()
    },
    methods: {
        userinfo(){
            var _this=this
      this.$http.get(IP+'/bonsai/user/get/'+this.$store.state.currentdata.UserId,
      {
     
          'headers': {
            'Content-Type': 'application/json',
            },
            
            }).then((response)=>{
          
            if (response.body.code == '00') {
             
                var data=response.body.data
                _this.username=data.username==""?"暂未设置":data.username, 
                _this.cnname=data.cnname==""?"暂未设置":data.cnname,  
                _this.mobile=data.mobile==""?"暂未设置":data.mobile,
                _this.address=data.address==""?"暂未设置":data.address,
                _this.email=data.email==""?"暂未设置":data.email
                    
                  // _this.userinfolist.push({
                  //   "id":data.id,
                  //   "flagrole":data.flagrole,
                  //   "password":data.password,
                  //   })
                
                
            }
        })
        .catch(function(){
          alert("出错啦")
        })
        
        },
        //编辑个人信息按钮
        editinfo(){
              this.flag=true
        },
        //保存个人信息
        save(){
          var _this=this
          let mobile=_this.mobile
          let email=_this.email 
          let username=_this.username 
          let cnname=_this.cnname 
         if (!username||!cnname) {
            _this.ErrorTip="用户名和中文名不能为空"
            return false
         }
           
           if (!(/^1[34578]\d{9}$/.test(mobile))) {
        _this.ErrorTip="手机号格式不正确"
       
        return false
      }
      if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
        _this.ErrorTip="邮箱格式不正确"
       
        return false
      }
      this.$http.post(IP+'/bonsai/user/update',{
        "id":_this.$store.state.currentdata.UserId,
          "username":username,
     "mobile":mobile,
     "address":_this.address,
     "cnname":cnname,
"email":email,
        }, {
          
          'headers': {
            'Content-Type': 'application/json',
        }
        })
        .then((response)=>{
           // if (response.body.code == '00') {
           //      alert(message)
               
           //  }
            this.flag=false
        })
        .catch(function(){
          alert("出错啦")
        })
        },
        notsave(){
          var r=confirm("确定取消所有编辑吗")
          if (r) {
          this.flag=false}
        }


    }
}

        
</script>
<style scoped>
 .look div,.edit div{
     padding: 20px;
     font-size: 14px;
 }
 .AreaR{
position: relative;
 }
.editinfo{
  position: absolute;
  right: 12px;
  background-color: green;
  border: 3px solid green;
  color:#fff;
  font-size: 14px;
}
.notsave,.save{
  width: 100px;
  margin-left:30px;
}
.error{
  font-size: 12px;
  color: red;
  padding-top: 12px;
  padding-left: 12px;
}
</style>
