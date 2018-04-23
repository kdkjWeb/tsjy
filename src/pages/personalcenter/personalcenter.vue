<template>
  <div class="container">
    <div class="center">
      <div class="center_left">
        <div class="change_header">
          <div class="change_header_img">
            <input class="change_header_file" type="file" @change="onFileChange">
            <img :src="user.headerSrc" alt="">
          </div>
          <p class="change_header_name">{{user.name}}</p>
          <p class="change_header_vip">VIP</p>
        </div>
      </div>
      <div class="center_right">
        <p>昵称：<input type="text" v-model="user.name"></p>
        <p>账号：<input type="text" v-model="user.accountnumber"></p>
        <p>新密码：<input type="text" v-model="user.newpas"></p>
        <p>确认密码：<input type="text" v-model="user.successpas"></p>
        <div class="btn" @click="save">保存</div>
      </div>
    </div>
  </div>
</template>


<script>
export {default} from './personalcenterCtr'
</script>


<style scoped>
.container{
    width: 1200px;
    height: 600px;
    padding: 50px;
    background-color: #fff;
    box-sizing: border-box;
    margin:  50px auto 80px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
}
.center{
  display: flex;
  display: -webkit-flex;
  width: 100%;
  height: 500px;
  background-image: url('../../assets/images/treeWar.png');
}
.center_left{
  flex: 3;
  height: 100%;
  border-right: 2px solid #ddd;
  text-align: center;
}
.center_right{
  flex: 4;
  height: 100%;
  padding-top: 160px;
}
.center_right p{
  text-align: center;
  color: #fff;
  padding-bottom: 20px;
}
.center_right p input{
  outline: none;
  color: #fff;
  background-color: transparent;
  border: none;
}
.center_right .btn{
  width: 115px;
  height: 30px;
  background-color: #db844e;
  color: #fff;
  margin:  50px auto 0;
  border-radius: 8px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}



.change_header{
  width: 150px;
  height: 235px;
  margin: 135px auto 0;
}
.change_header_img{
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: blue;
}
.change_header p{
  padding-top: 18px;
}
.change_header p.change_header_name{
  font-size: 18px;
  color: #fff;
}
.change_header p.change_header_vip{
  font-size: 16px;
  font-weight: bold;
  color: #f2d347;
}
.change_header_file{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}
 .change_header_img img{
   width: 100%;
   height: 100%;
   border-radius: 50%;
 }
</style>

