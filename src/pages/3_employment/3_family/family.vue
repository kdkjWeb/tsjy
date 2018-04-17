<template>
  <div class="family">
      <div class="teacher" v-for="(item,index) in teacherList" :key="index">
          <img :src="item.src" alt="">
          <div class="family_content">
             <h4>{{item.subject}}</h4>
             <p>{{item.name}}</p>
             <p>{{item.sex}}</p>
             <p>{{item.age}}岁</p>
             <p>{{item.empiric}}年工作经验</p>
             <p class="family_des">{{item.content}}</p>
             <span>{{item.time}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export {default} from './familyCtr'
</script>

<style scoped="">
.family{
    width: 1078px;
    /* height: 5000px; */
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin: 0 auto 95px;
    padding: 65px 60px 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.teacher{
    padding: 30px;
    width: 450px;
    border: 1px solid #ddd;
    margin-bottom: 40px;
}
.teacher img{
    width: 245px;
    height: 340px;
}
.family_content{
    position: relative;
    float: right;
    width: 180px;
    color: #656565;
}
.family_content h4{
    color: #000;
}
.family_content p{
    padding-top: 15px;
}
.family_content p.family_des{
    padding-top: 35px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}
.family_content span{
    position: absolute;
    right: 0;
    bottom: -50px;
}
</style>



