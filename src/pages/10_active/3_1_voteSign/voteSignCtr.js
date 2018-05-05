/**
 * Created by kdkjPC on 2018/4/19.
 */
export default {
  data(){
    return {
      id:"",
      item:{},
      currentPage1: 1,
      listPerson: [{
        num: "1",
        src: "../../static/person.png",
        name: "杨幂"
      }, {
        num: "1",
        src: "../../static/person.png",
        name: "杨幂"
      }, {
        num: "1",
        src: "../../static/person.png",
        name: "杨幂"
      }, {
        num: "1",
        src: "../../static/person.png",
        name: "杨幂"
      }, {
        num: "1",
        src: "../../static/person.png",
        name: "杨幂"
      }, {
        num: "1",
        src: "../../static/person.png",
        name: "杨幂"
      }],
      list: [{
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }, {
        title: "看了跨国短信之后莫名其妙想改李三岁。。。。原来还是老板大人的说",
        timer: "2019-03-02",
        src: "../../../static/wish1.png",
        name: "神秘树洞"
      }]
    }
  },
  methods: {
    toRanking(){
      this.$router.push({
        name:"voteRanking"
      })
    },
    toIntroduce(){
      this.$router.push({
        name:"voteAffiche",
        query:{
          id:this.id
        }
      })
    },
    toVipDetail(){
      this.$router.push({
        name:"voteVipDetail"
      })
    },
    signBtn(){
      this.$router.push({
        name:"voteSignForm",
        query:{
          id:this.id
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    getDetail(){
      this.$g({
        url:this.$api.activeFindOneById,
        params:{
          id:this.id,
        }
      }).then(res=>{
        var j = JSON.parse(JSON.stringify(res.data));
        j.pubDate = j.pubDate.split(" ")[0];
        j.imgUrl = this.$baseU + j.imgUrl;
        this.item = JSON.parse(JSON.stringify(j));
      },errRes=>{

      });
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
