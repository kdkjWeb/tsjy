<template>
  <div class="container">
    <div class="info">
      <div class="info_img">
        <img src="../../../assets/images/store.png" alt="" width="100%" height="100%">
      </div>
      <div class="info_list">
        <h1>{{user.name}}</h1>
        <p>歌&emsp;&emsp;手：{{user.stagename}}</p>
        <p>点&nbsp; 歌&nbsp; 人：{{user.sex}}</p>
        <p>主&emsp;&emsp;题：{{user.age}}岁</p>
        <p>心&nbsp; 里&nbsp; 话：发货发到空间撒谎防静电货到付款骄傲了和大家撒付款后看电视发货发到空间撒谎防静电货到付款骄傲了和大家撒付款后看电视发货发到空间撒谎防静电货到付款骄傲了和大家撒付款后看电视</p>
      </div>
    </div>
  </div>
</template>


<script>
  export {default} from './musicDetailCtr'
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
    /*justify-content: space-between;*/
  }
  .info_img{
    width: 400px;
    height:400px;
    margin-right:50px;
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
