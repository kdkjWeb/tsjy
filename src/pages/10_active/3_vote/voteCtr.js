/**
 * Created by kdkjPC on 2018/4/14.
 */
export default {
  data(){
    return {
      currentPage1:5,
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted(){

  }
}
