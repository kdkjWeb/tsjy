/**
 * Created by kdkjPC on 2018/4/19.
 */
export default {
  data(){
    return {
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
        name:"voteAffiche"
      })
    },
    toVipDetail(){
      this.$router.push({
        name:"voteVipDetail"
      })
    },
    signBtn(){
      this.$router.push({
        name:"voteSignForm"
      })
    },
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
