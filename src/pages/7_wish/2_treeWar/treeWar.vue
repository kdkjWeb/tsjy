<template>
    <div class="container">
      <div class="ad">
        <img src="../../../assets/images/treeWar.png" alt="">
        <div class="des">
          寄存内心秘密的地方，那些现实中不曾发出的声音请把他留在这里
          <div class="hr"></div>
        </div>
      </div>
      <div class="list">
        <div class="listB"></div>
      </div>
    </div>
</template>
<script>
    export default require('./treeWarCtr');
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
    padding:15px;
    border-bottom:1px solid #e2e2e2;
  }
  .listB:last-child{
    border-bottom:none;
  }
</style>
