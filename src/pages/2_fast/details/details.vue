<template>
  <div class="details">
      <img src="http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg" alt="" width="100%" height="500">
      <h3>{{title}}</h3>
      <p><span>发布人：{{name}}</span><span class="time">发布时间：{{time}}</span></p>
      <div>{{content}}</div>
  </div>
</template>


<script>
export {default} from './detailsCtr'
</script>


<style scoped>
.details{
    width: 1098px;
    padding: 50px;
    margin:  30px auto 80px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
}
.details h3{
    text-align: center;
    padding-top: 50px;
}
.details p{
   text-align: center;
   padding: 15px 0 35px;
}
.details p span.time{
    padding-left: 20px;
}
</style>
