<template>
  <div class="details">
      <h1>{{title}}</h1>
      <div v-html="content"></div>
  </div>
</template>

<script>
export {default} from './affichedetailsCtr'
</script>


<style scoped>
.details{
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
}
.details h1{
    text-align: center;
    padding: 10px 0 65px;
}
</style>

