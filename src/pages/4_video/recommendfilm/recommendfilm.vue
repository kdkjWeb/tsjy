<template>
  <div class="container">
      <img src="http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg" alt="" width="100%" height="500"> 
      <h1>{{title}}</h1>
      <p><span>发布人：{{name}}</span><span class="time">发布时间：{{time}}</span></p>
      <div>{{content}}</div>
  </div>
</template>


<script>
export {default} from './recommendfilmCtr'
</script>

<style scoped>
.container {
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
  }
.container h1{
    text-align: center;
    padding: 50px 0 15px;
}
.container p{
    text-align: center;
    padding-bottom: 35px;
}
.container p span.time{
    padding-left: 20px;
}
</style>

