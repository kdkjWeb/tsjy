/**
 * Created by kdkjPC on 2018/4/17.
 */
export default {
  data(){
    return {
      thisIndex:0,
      showAlert:false,
      tabBarList:[
        {"title":"精彩MUSIC"},
        {"title":"倾听FM"},
        {"title":"留声机"},
        {"title":"点播台"},
      ],
      amusement: {
        btn: '>',
        btnFlag: false,
        video: {
          src: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598',
          bgSrc: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg'
        },
        videoList: [
          {
            src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          },{
            src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
            title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
            videosrc: 'http://ugcws.video.gtimg.com/b03997jxz2a.m701.mp4?vkey=66B78BA998E725057CAAC415CB0FEFF31057EE033ECB8E5644CD71386C76A4EF553C2608E21ED09D856728C485712FDD175C919D252234FE5D772843306EFD52361FB4D07BCD5AC3193F24C06CDF6AC9D84D901B75851429664CD84D88F14D8F1E0C0C66DE01F6A9F2DC5F5EDD985370898D6A8D2EE29A72&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
          }
        ]
      },
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
    //打开娱乐右侧相关视屏
    amusementBtn(){
      if(!this.amusement.btnFlag){
        this.amusement.btn = '<'
        this.amusement.btnFlag = !this.amusement.btnFlag
      }else{
        this.amusement.btn = '>'
        this.amusement.btnFlag = !this.amusement.btnFlag
      }
    },
    //点击右侧相关视屏的每一个
    changeVedio(item){
      let video = document.getElementById('video')
      this.amusement.video.src = item.videosrc;
      this.amusement.video.bgSrc = item.src;
      setTimeout(()=>{
        video.play()
      },0)
    },
    toLink(index) {
      this.thisIndex = index;
      switch(index){
        case 2:
        this.$router.push({
          name: 'phonograph'
        });
        break;
        case 3:
          this.showAlert = !this.showAlert;
          break;
      }
    },
    alertOpen(){
      this.showAlert = !this.showAlert;
    },
    toMusicDetail(){
      this.$router.push({
        name:"musicDetail"
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
