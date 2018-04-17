<template>
    <div class="container">
      <div class="amusement">
        <div class="amusement_music">
          <div class="amusement_video">
            <video id="video" :poster="amusement.video.bgSrc" controls="controls" width="930" height="495" :src="amusement.video.src"></video>
          </div>
          <div class="amusement_list" :class="{amusement_list_active: amusement.btnFlag}">
            <h3 class="amusement_title">相关视屏</h3>
            <ul class="amusement_video_list">
              <li v-for="(item,index) in amusement.videoList" :key="index" @click="changeVedio(item)">
                <img :src="item.src" width="80" height="65" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
            <div class="amusement_btn" @click="amusementBtn">{{amusement.btn}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default require('./videoCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
  }

  /* 娱乐 */
  .amusement_music{
    /* position: relative; */
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 495px;
    background-color: #ddd;
    overflow: hidden;
  }
  .amusement_list{
    /* position: absolute;
    right: 0;
    top: 0; */
    position: relative;
    height: 100%;
    width: 270px;
    background: #4b4b4b;
    transition: all .5s;
  }
  .amusement_list_active{
    width: 0px;
    transition: all .5s;
  }
  .amusement_video_list{
    height: 435px;
    width: 100%;
    margin-top: 10px;
    padding: 0 15px;
    overflow-y: scroll;
  }
  .amusement_video_list li{
    padding-bottom: 15px;
  }
  .amusement_video_list li img{
    vertical-align: middle;
  }
  .amusement_video_list li span{
    padding-left: 10px;
    vertical-align: middle;
    display: inline-block;
    width: 150px;
    color: #fff;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .amusement_title{
    line-height: 50px;
    padding-left: 20px;
    color: #fff;
  }
  .amusement_video{
    width: 830px;
    height: 100%;
    /* background: pink; */
    margin: 0 auto;
  }
  .amusement_video video{
    object-fit: fill;
  }
  .amusement_btn{
    position: absolute;
    z-index: 999;
    left: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    content: "<";
    width: 18px;
    height: 60px;
    background: rgba(0, 0, 0, .3);
    text-align: center;
    line-height: 60px;
    color: #fff;
  }
  .amusement_more{
    margin: 55px auto 90px;
  }
</style>
