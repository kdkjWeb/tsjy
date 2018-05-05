export default{
    data() {
        return {
          showAlert: false,
          currentPage:1,
          pageSize:10,
          total:null,
          list: []
        }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getList();
      },
      toJobDetail(item){
        this.$router.push({
          name: "getJob",
          query: {
            id: item.id
          }
        })
      },
      publishJob(){
        this.$router.push({
          name:"getJobForm"
        })
      },
      /**
       * 获取列表
       */
      getList(){
        this.$p({
          url:this.$api.tutorQuery,
          params:{
            pageSize:this.pageSize,
            current:this.currentPage,
            type:2
          }
        }).then(res=>{
          this.total = res.data.total;
          var arr = res.data.list;
          arr.forEach((e,index)=>{
            arr[index].pubDate = e.pubDate.split(" ")[0];
            arr[index].head = this.$baseU + e.head;
          });
          this.list = JSON.parse(JSON.stringify(arr));
        },errRes=>{

        })
      }

    },
  mounted(){
    this.getList();
  }
}
