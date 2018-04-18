<template>
  <div class="store container">
      <div class="ad">
        <img src="../../../assets/images/store.png" alt="">
        <div class="des">
          把你的忧愁、忧虑讲出啊来，让大家帮你排忧解难
          <div class="hr"></div>
        </div>
      </div>
      <div class="store_dis">
          <div class="store_content">
            <img :src="userImg" alt="" width="60px" height="60">
            <textarea name="" id="" v-model="content"></textarea>
          </div>
          <div class="store_btn" @click="send"><span class="iconfont icon-fasong"></span>发送</div>
        </div>
      <div class="list">
        
        <ul class="listB">
          <li class="job_list" v-for="(item,index) in jobList" :key="index">
          <div class="job_left">
            <img :src="item.src" alt="">
            <p>{{item.name}}</p>
          </div>
          <div class="job_right">
            <p>{{item.content}}</p>
            <div class="store_bottom">
              <div>{{item.time}}</div>
              <div class="share"><span class="iconfont icon-icon_share"></span><span @click="firstDis(index)" class="dis">评论【{{item.star}}】</span></div>
            </div>
            <!-- 用户输入评论内容 -->
            <div class="dis_content" v-if="firstIndex == index">
              <textarea name="" id=""></textarea>
              <div class="store_btn dis_content_btn" @click="send"><span class="iconfont icon-fasong"></span>发送</div>
            </div>
       
            <ul class="user_dis_list" v-if="item.disList.length>0">
              <li class="seconed_dis" v-for="(item,index) in item.disList" :key="index">
                <div class="seconed_dis_top">
                  <div class="seconed_dis_img"> 
                    <img :src="item.src" alt="">
                  </div>
                  <div class="seconed_dis_content">
                    <p class="seconed_dis_content_top">
                      <span>{{item.name}}</span>
                      <span class="time">{{item.time}}</span>
                      <span @click="seconedDis(index)" class="reply">回复</span>
                    </p>
                    <p>{{item.content}}</p>
                  </div>
                </div>
                <div class="dis_content" v-if="seconedIndex == index">
                  <textarea name="" id=""></textarea>
                  <div class="store_btn dis_content_btn" @click="send"><span class="iconfont icon-fasong"></span>发送</div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        </ul>
      </div>

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
  </div>
</template>

<script>
export {default} from './storeCtr'
</script>

<style scoped>
.container {
    width:1200px;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
    margin:0 auto 100px;
  }

  .ad {
    position:relative;
    width:100%;
    height:500px;
  }
  .ad img {
    width:100%;
    height:100%;
  }
  .des {
    position:absolute;
    width:100%;
    text-align: center;
    font-size:18px;
    color:white;
    bottom:100px;
  }
  .hr {
    width:250px;
    margin:30px auto;
    border-bottom:1px solid #fff;
  }


  .list {
    margin-top:50px;
    border:1px solid #e2e2e2;
  }
  .listB {
    /* padding:15px; */
    border-bottom:1px solid #e2e2e2;
  }
  .listB:last-child{
    border-bottom:none;
  }



  /* 发表评论 */
  .store_dis{
    height: 190px;
    padding: 25px 35px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin-top: 40px;
  }
  .store_content{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
   .store_content img{
     border-radius: 50%;
   }
  .store_content textarea{
    width: 940px;
    height: 88px;
    border: 1px solid #ddd;
    outline: none;
    resize: none;
    border-radius: 6px;
    padding: 5px;
  }
.store_btn{
    float: right;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #d7824b;
    border-radius: 20px;
    color: #fff;
}
.store_btn span{
    font-size: 22px;
    padding-right: 8px;
    vertical-align: middle;
}



.job_list{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.job_list:last-child{
  border-bottom: none;
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
  padding: 20px 30px 15px 35px;
}


.store_bottom{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  padding-top: 25px;
  color: #b2b2b2;
}
.store_bottom div.share span.dis{
  color: #db844e;
  cursor: pointer;
}
.store_bottom div.share span.iconfont{
  padding-right: 20px;
  font-size: 16px;
  cursor: pointer;
}


/* 输入评论内容 */
.dis_content{
  width: 805px;
  height: 150px;
  margin: 10px auto 0;
}
.dis_content textarea{
  padding: 5px;
  width: calc(100% - 12px);
  height: 80px;
  border: 1px solid #ddd;
  outline: none;
  resize: none;
}
.dis_content_btn{
  margin-top: 10px;
}



/* 评论列表展示 */
.user_dis_list{
  border: 1px solid #e4e4e4;
  background-color: #fafafa;
  margin-top: 10px;
}
.seconed_dis{
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
  padding: 10px;
}
.seconed_dis:last-child{
  border-bottom: none;
}
.seconed_dis_top{
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
.seconed_dis_img{
  flex: 1;
}
.seconed_dis_img img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.seconed_dis_content{
  flex: 9;
  margin-right: 20px;
}
.seconed_dis_content_top{
  padding-bottom: 10px;
}
.seconed_dis_content_top span.reply{
  float: right;
  cursor: pointer;
}
.seconed_dis_content_top span.time{
  padding-left: 10px;
}


/* 分页 */
.page{
  margin: 80px auto;
}
.pagination {
  text-align: center;
  margin-top:50px;
}
</style>


