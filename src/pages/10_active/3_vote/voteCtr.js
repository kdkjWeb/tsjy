/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      currentPage:1,
      pageSize:10,
      total:null,
      list:[{
        title:"2017年度盘点",
        src:"http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg",
        des:"创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作",
        time:"2017-03-02"
      },{
        title:"2017年度盘点",
        src:"http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg",
        des:"创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作",
        time:"2017-03-02"
      },{
        title:"2017年度盘点",
        src:"http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg",
        des:"创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作",
        time:"2017-03-02"
      },{
        title:"2017年度盘点",
        src:"http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg",
        des:"创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作",
        time:"2017-03-02"
      },{
        title:"2017年度盘点",
        src:"http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg",
        des:"创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作",
        time:"2017-03-02"
      },{
        title:"2017年度盘点",
        src:"http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg",
        des:"创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作",
        time:"2017-03-02"
      }]
    }
  },
  methods:{
      /**
       * 分页 当前第几页
       */
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getList();
      },
    toVoteSign(item){
      this.$router.push({
        name:"voteSign",
        query:{
          id:item.id
        }
      })
    },
      /**
       * 获取快讯数据
       */
      getList(){
        this.$p({
          url:this.$api.activeQuery,
          params:{
            pageSize:this.pageSize,
            current:this.currentPage
          }
        }).then(res=>{
          this.total = res.data.total;
          var arr = res.data.list;
          arr.forEach((e,index)=>{
            arr[index].pubDate = e.pubDate.split(" ")[0];
            arr[index].signBegin = e.signBegin.split(" ")[0];
            arr[index].signEnd = e.signEnd.split(" ")[0];
            arr[index].imgUrl = this.$baseU + e.imgUrl;
          });

          if(this.currentPage==1) {
            this.banner = arr[0];
          }
          this.list = JSON.parse(JSON.stringify(arr));

        },errRes=>{

        })
      }
  },
  mounted(){
    this.getList();
  }
}
