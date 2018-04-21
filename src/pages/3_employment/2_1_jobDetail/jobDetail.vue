<template>
    <div class="container">
      <h2>招聘XXXXXX</h2>
      <p>发布时间 : 2017-02-06</p>
      <p class="scalar"><span>6000 - 8000</span>元/月</p>
      <ul class="tags clear">
        <li>五险一金</li>
      </ul>
    </div>
</template>
<script>
    export default require('./jobDetailCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
    margin:50px auto 100px;
  }
  .container p {
    margin-top:10px;
    color:#666;
  }
  .container .scalar {
    margin:20px 0;
  }
  .scalar span {
    font-size:20px;
    font-weight: bold;
    color:#db844e;
    letter-spacing: 2px;
  }
  .tags li{
    display: inline-block;
    padding:0 20px;
    height:30px;
    line-height: 30px;
    text-align: center;
    border:1px solid #8d8986;
    color:#8d8986;
    border-radius: 7px;
  }
</style>
