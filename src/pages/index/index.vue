<template>
  <div class="index">
     <!-- 首页的轮播图 -->
     <el-carousel :interval="5000" arrow="always" height="500px" class="carousel">
        <el-carousel-item v-for="(item,index) in carousel" :key="index">
        <img :src="item.src" alt="">
        </el-carousel-item>
    </el-carousel>
    <!-- 主体部分内容 -->
    <div class="main">
        <!-- 许愿树 -->
        <div class="wish"></div>
        <!-- 快讯 -->
        <div class="alerts">
            <div class="main_top">
                快讯
            </div>
            <div class="main_header">
                <ul>
                    <li v-for="(item,index) in alerts.header" :key="index">
                        <a href="">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="alerts_main">
                <div class="alerts_left">
                    <div class="alerts_left_top">
                        上面
                    </div>
                    <div class="alerts_left_bottom">
                        下面
                    </div>
                </div>
                <div class="alerts_right">
                    <div class="topBar"></div>
                    <ul>
                        <li v-for="(item,index) in alerts.notice" :key="index">
                            <a href="">
                                <span class="type">【{{item.type}}】</span>
                                {{item.content}}
                                <span class="time">{{item.time}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 娱乐 -->
        <div class="amusement"></div>
        <!-- 探城 -->
        <div class="exploreCity"></div>
        <!-- 网红 -->
        <div class="netRed"></div>
    </div>
  </div>
</template>
<script>
export {default} from './indexCtr'
</script>


<style scoped>
.carousel img{
    width: 100%;
    height: 100%;
}
/* 公用的头部标题和头部导航 */
.main_top{
    text-align: center;
    font-size: 30px;
    border-bottom: 1px solid #000;
}
.main_header ul{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    margin: 15px 0 50px;
}
.main_header ul li{
    width: 90px;
    text-align: center;
}
.topBar{
    width: 100%;
    height: 5px;
    background-color: #fcfcfc;
}



/* 主体部分 */
.main{
    width: 1200px;
    height: 5000px;
    margin: 0 auto;
}

/* 快讯模块 */
.alerts_main{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}
.alerts_left{
    width: 505px;
}
.alerts_left_top{
    height: 445px;
    background: red;
}
.alerts_left_bottom{
    height: 355px;
    background: blue;
    margin-top: 35px;
}
.alerts_right{
    width: 655px;
}
.alerts_right ul{
    padding: 25px 15px;
    background-color: #ededed;
}
.alerts_right ul li{
    height: 90px;
    line-height: 90px;
    border: 1px solid #ddd;
    border-bottom: none;
    background-color: #fff;
}
.alerts_right ul li a{
    color: #777777;
}
.alerts_right ul li a .type{
    padding: 0px 10px 0 35px;
    color: #d38a55;
}
.alerts_right ul li a .time{
    float: right;
    padding-right: 20px;
    color: #6c6c6c;
}
.alerts_right ul li:last-child{
    border-bottom: none;
}
</style>
