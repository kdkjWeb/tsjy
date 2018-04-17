<template>
    <div class="information">
        <div class="information_list" v-for="(item,index) in informationList" :key="index">
            <img :src="item.src" alt="">
            <div class="information_list_des">
                <h6>{{item.title}}</h6>
                <p class="information_content">{{item.content}}</p>
                <p class="information_time">{{item.time}}</p>
            </div>
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
export {default} from './informationCtr'
</script>


<style scoped>
.information{
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
.information_list{
    width: 510px;
    border: 1px solid #ddd;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 40px;
}
.information_list img{
    width: 100%;
    height: 345px;
}
.information_list_des{
    padding: 25px 45px 25px 35px;
}
.information_list_des h6{
    padding-bottom: 20px;
}
.information_content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.information_time{
    text-align: right;
    padding-top: 20px;
}

.page{
  margin: 40px auto 80px;
}
.pagination {
  text-align: center;
}
</style>

