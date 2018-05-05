export default{
    data() {
        return {
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
      toFamilyDetail(item){
        this.$router.push({
          name:"familyDetail",
          query:{
            id:item.id
          }
        })
      },
      toPublish(){
        this.$router.push({
          name:"familyForm"
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
            type:1
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
      },
    },
  mounted(){
    this.getList();
  }
}
