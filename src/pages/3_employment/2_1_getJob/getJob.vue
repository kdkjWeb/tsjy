<template>
    <div class="container">
      <div class="headerT">基本信息</div>
      <div class="conT">
        <h2>姓名</h2>
        <p>基本信息:男|23岁|现居地:成都</p>
        <p>期望职位:UI</p>
        <p>工作经验:3年</p>
        <p>学历:本科</p>
        <p>期望薪资:50000元/月</p>
      </div>
      <div class="headerT">自我介绍</div>
      <div class="conT">
        <ol type="1">
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ol>
      </div>

      <div class="headerT">工作经历</div>
      <div class="conT">
        <p>2017/01 - 2018/08</p>
        <p>工作岗位:本科</p>
        <p>职位月薪:50000元/月</p>
        <p>工作内容</p>
        <ol type="1">
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ol>
      </div>
    </div>
</template>
<script>
    export default require('./getJobCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    padding:50px;
    background-color:white;
    margin:50px auto 100px;
  }
  .headerT {
    width:100%;
    padding:10px 0 10px 20px;
    background-color: #f2f2f2;
  }
  .conT {
    margin:30px 0;
    color:#666;
  }
  .conT p {
    margin-bottom:10px;
  }
  .conT h2 {
    margin-bottom:20px;
  }
  .conT li {
    list-style: inherit;
    padding-left:10px;
    margin-left:15px;
    margin-bottom:10px;
  }
</style>
