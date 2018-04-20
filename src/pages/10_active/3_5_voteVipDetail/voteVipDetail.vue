<template>
  <div class="container">
    <div class="info">
      <div class="info_img">
        <img :src="user.src" alt="" width="100%" height="100%">
      </div>
      <div class="info_list">
        <h1>{{user.name}}</h1>
        <p>艺名：{{user.stagename}}</p>
        <p>性别：{{user.sex}}</p>
        <p>国籍：{{user.country}}</p>
        <p>民族：{{user.ethnic}}族</p>
        <p>年龄：{{user.age}}岁</p>
        <p>体重：{{user.weight}}kg</p>
        <p>身高：{{user.height}}cm</p>
        <p>学校：{{user.school}}</p>
        <p>出生日期：{{user.birthday}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export {default} from './voteVipDetailCtr'
</script>

<style scoped>
  .container{
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding: 70px 40px 0;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
  }
  .info{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 125px;
  }
  .info_img{
    width: 500px;
    height: 500px;
    border: 1px solid #ddd;
  }
  .info_list{
    width: 520px;
    height: 500px;
  }
  .info_list p{
    padding-top: 20px;
  }
</style>

