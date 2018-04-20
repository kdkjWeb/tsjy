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
      }]
    }
  },
  methods: {
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
