<template>
  <div class="job">
      <div class="job_header">
        <span>选择你需要的人才</span>
        <span class="job_btn" @click="alertOpen">发布信息</span>
      </div>
      <ul>
        <li class="job_list" v-for="(item,index) in jobList" :key="index">
          <div class="job_left">
            <img :src="item.src" alt="">
            <p>发布人：{{item.name}}</p>
          </div>
          <div class="job_right">
            <p class="job_right_top"><span class="flea_type">【{{item.subject}}】</span><span @click="toFleaDetail">{{item.content}}</span></p>
            <p class="job_right_time">{{item.time}}</p>
          </div>
        </li>
      </ul>

      <div class="page">
        <el-pagination class="pagination"
                     background
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage1"
                     :page-size="100"
                     :total="1000"
                     layout="prev, pager, next">
        </el-pagination>
      </div>
    <div class="alert" v-if="showAlert">
      <div class="alertBox">
        <i class="iconfont icon-remove" @click="alertOpen"></i>
        <p>发表信息</p>
        <el-input v-model="input" placeholder="请输入标题"></el-input>
        <el-input v-model="input" placeholder="请输入类型"></el-input>
        <el-input v-model="input" placeholder="请输入联系人"></el-input>
        <el-input v-model="input" type="number" placeholder="请输入手机号"></el-input>
        <el-input type="textarea" :rows="3" v-model="input" placeholder="更多介绍"></el-input>
        <div class="alertBtn">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export {default} from './fleaCtr'
</script>


<style scoped="">
.job{
  width: 1128px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px 2px #ddd;
  margin: 50px auto 95px;
  padding: 0 35px;
  background-color: white;
}
.job_header{
  position: relative;
  padding: 50px 0 30px;
}
.job_btn{
  position: absolute;
  right: 0;
  top: 22px;
  display: inline-block;
  width: 150px;
  height: 50px;
  background-color: #da854f;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
}
.job ul{
  border: 1px solid #ddd;
}
.job ul .job_list:last-child{
  border-bottom: none;
}
.job_list{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.job_list .job_left{
  width: 265px;
  text-align: center;
  background-color: #fafafa;
}
.job_left img{
  /* display: block; */
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-top: 10px;
}
.job_left p{
  padding: 20px 0;
}
.job_list .job_right{
  width: 865px;
  padding: 35px 85px 35px 70px;
}
.job_right_price{
  float: right;
}
.job_right_top{
  font-size: 16px;
  width: 743px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.job_right_top span:nth-of-type(2) {
  text-decoration: underline;
  cursor: pointer;
}
.job_right_price{
  font-size: 14px;
}
.job_right_price span{
  color: #da854f;
  font-size: 16px;
}
.job_right_time{
  padding-top: 20px;
}
.flea_type{
    color: #d77b48;
}
.page{
  margin: 80px auto;
}
.pagination {
  text-align: center;
  margin-top:50px;
}
  .alert {
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(0,0,0,.5);
  }
  .alertBox {
    width:600px;
    height:500px;
    background-color: white;
    border-radius: 10px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-300px;
    margin-left:-250px;
    padding:30px 50px;
    box-sizing: border-box;
  }
  .alertBox i {
    position:absolute;
    top:10px;
    right:10px;
    font-size:20px;
  }
  .alertBox p{
    text-align: center;
    margin-bottom:20px;
  }
.alertBox .el-input {
  margin-bottom:20px;
}
  .alertBtn {
    width:100%;
    height:40px;
    line-height: 40px;
    text-align: center;
    color:white;
    font-size:16px;
    background-color: #5b565d;
    margin-top:20px;
    cursor: pointer;
  }

</style>




