/**
 * Created by kdkjPC on 2018/4/21.
 */
export default {
  data(){
    return {
      showPhone:false,
      detail:{}
    }
  },
  methods:{
    seePhone(){
      this.showPhone = true;
    },
    /**
     * 查询详情
     */
    getDetail(){
      this.$p({
        url:this.$api.hireQuery,
        params:{
          id:this.id,
        }
      }).then(res=>{
        var j = JSON.parse(JSON.stringify(res.data.list[0]));
        j.pubDate = j.pubDate.split(" ")[0];
        j.head = this.$baseU + j.head;
        this.detail = JSON.parse(JSON.stringify(j));
      },errRes=>{

      });
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
