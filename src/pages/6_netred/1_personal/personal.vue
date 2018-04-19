<template>
  <div class="personal">
      <div class="personal_list" v-for="(item,index) in netredList" :key="index" @click="details">
          <img :src="item.src" alt="">
          <p>{{item.name}}</p>
          <p>{{item.title}}</p>
      </div>

      <div class="page">
        <el-pagination class="pagination"
                     background
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage1"
                     :page-size="100"
                     :total="1000"
                     layout="prev, pager, next">
      </el-pagination>
      </div>
  </div>
</template>


<script>
export {default} from './personalCtr'
</script>


<style>
.personal{
    width: 1078px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 2px #ddd;
    margin: 0 auto 95px;
    padding: 65px 60px 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.personal_list{
    width: 330px;
    border: 1px solid #ddd;
    text-align: center;
    margin-bottom: 40px;
    border-radius: 5px;
    overflow: hidden;
}
.personal_list img{
    width: 330px;
    height: 260px;
    padding-bottom: 15px;
}
.personal_list p:last-child{
    padding: 15px 0 25px;
    color: #7f7f7f;
}

.page{
  margin: 40px auto 80px;
}
.pagination {
  text-align: center;
}
</style>

