export default{
    data() {
        return {
            firstIndex: null,
            seconedIndex: null,
            threeIndex: null,
            currentPage1:1,
            pageSize: 10,
            current: 1,
            total: 0,
            content: '',
            firstContent: '',
            seconedContent: '',
            threeContent: '',
            userImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
            /*allList: [
                {
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-20',
                    star: '9',
                    disList: [
                        {
                            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                            name: '神秘人',
                            time: '2018-05-12',
                            content: '第四次工业革命方兴未艾，但也蕴含不少风险和挑战。现在世界上的问题这么多，挑战这么多，还是要通过平等协商，加强多边合作来应对。历史一再证明，封闭最终只能走进死胡同，只有开放合作，道路才能越走越宽',
                            threeList:[
                                {
                                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                                    name: '张三',
                                    time: '2018-05-13',
                                    content: '第四次工业革命方兴未艾，但也蕴含不少风险和挑战。现在世界上的问题这么多，挑战这么多，还是要通过平等协商，加强多边合作来应对。历史一再证明，封闭最终只能走进死胡同，只有开放合作，道路才能越走越宽'
                                },{
                                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                                    name: '张三',
                                    time: '2018-05-13',
                                    content: '第四次工业革命方兴未艾，但也蕴含不少风险和挑战。现在世界上的问题这么多，挑战这么多，还是要通过平等协商，加强多边合作来应对。历史一再证明，封闭最终只能走进死胡同，只有开放合作，道路才能越走越宽'
                                }
                            ]
                        },{
                            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                            name: '张三',
                            time: '2018-05-13',
                            content: '第四次工业革命方兴未艾，但也蕴含不少风险和挑战。现在世界上的问题这么多，挑战这么多，还是要通过平等协商，加强多边合作来应对。历史一再证明，封闭最终只能走进死胡同，只有开放合作，道路才能越走越宽',
                            threeList: []
                        },{
                            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                            name: '神秘人',
                            time: '2018-05-14',
                            content: '第四次工业革命方兴未艾，但也蕴含不少风险和挑战。现在世界上的问题这么多，挑战这么多，还是要通过平等协商，加强多边合作来应对。历史一再证明，封闭最终只能走进死胡同，只有开放合作，道路才能越走越宽',
                            threeList: []
                        },{
                            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                            name: '神秘人',
                            time: '2018-05-15',
                            content: '第四次工业革命方兴未艾，但也蕴含不少风险和挑战。现在世界上的问题这么多，挑战这么多，还是要通过平等协商，加强多边合作来应对。历史一再证明，封闭最终只能走进死胡同，只有开放合作，道路才能越走越宽',
                            threeList: []
                        },
                    ]
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-21',
                    star: '19',
                    disList: []
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-22',
                    star: '29',
                    disList: []
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-23',
                    star: '39',
                    disList: []
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-24',
                    star: '109',
                    disList: []
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-25',
                    star: '69',
                    disList: []
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    content: '习近平指出，当前，世界经济出现了一些积极向好势头，但面临的诸多问题并未从根本上解决。我去年在达沃斯指出的全球增长动能不足、全球经济治理滞后、全球发展失衡这三大根本性矛盾仍然比较突出。近来，反全球化思潮和保护主义情绪升温，加剧了世界经济中的风险和不确定性',
                    time: '2018-04-20',
                    star: '79',
                    disList: []
                }
            ]*/
            allList: [],
            user: {}
        }
    },
    methods: {
        isLogin(){
             if(!this.user){
                this.$message.error({
                    message: '您还没有登录，请登录！',
                });
                this.content = '';
                return false;
            }else{
                return true
            }
            
        },
        //点击发送按钮
        send() {
            
            //判断用户是否登录
            if(!this.isLogin()){
                return
            }
            //判读用户是否输入内容
            if(!this.content){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            //提交操作用户留言
            this.$p({
                url: this.$api.wishingTree,
                params:{
                    type: 3,
                    userid: this.user.id,
                    content: this.content,
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '恭喜你，已经留下你的秘密！',
                        type: 'success'
                      });
                      this.content = '';
                      this.current = 1;
                      this.currentPage1 = 1;
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })

        },
        firstSend(index,id) {
           
            //判读用户是否输入内容
            if(!this.firstContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            this.firstIndex = index;

            this.$p({
                url: this.$api.addMessage,
                params: {
                    content: this.firstContent,
                    leafId: id,
                    userid: this.user.id,
                    type: 1
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                      });
                      this.firstIndex = null;
                      this.firstContent = '';
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })


        },
        seconedSend(index,id,id1,item) {
            if(!this.seconedContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            this.$p({
                url: this.$api.addMessage,
                params: {
                    content: this.seconedContent,
                    belongmessageid: id,
                    leafId: id1,
                    userid: this.user.id,
                    type: 1
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                      });
                      this.$set(item,'isShow',false)
                      console.log(item)
                      this.seconedContent = '';
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })
        },
        threeSend(index,id,id1,item){
            if(!this.threeContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
                  return;
            }
            this.$p({
                url: this.$api.addMessage,
                params: {
                    content: this.threeContent,
                    belongmessageid: id,
                    leafId: id1,
                    userid: this.user.id,
                    type: 1
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '评论成功！',
                        type: 'success'
                      });
                      this.$set(item,'isShow1',false)
                      this.threeContent = '';
                      this.getDisList(this.current,this.pageSize)
                }
            },err=>{

            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getDisList(val,this.pageSize)
        },
       //评论楼主的问题
       firstDis(index){
        //判断用户是否登录
        if(!this.isLogin()){
            return
        }
        this.firstIndex = index;
        this.seconedIndex = null;
        this.threeIndex = null;
       },
       //楼主用户交叉评论
       seconedDis(index,item){
            //判断用户是否登录
        if(!this.isLogin()){
            return
        }
        this.seconedIndex = index;
        this.firstIndex = null;
        this.threeIndex = null;
        this.$set(item,'isShow',true)
       },
       threeDis(index,item){
           //判断用户是否登录
        if(!this.isLogin()){
            return
        }
        this.threeIndex = index;
        this.firstIndex = null;
        this.seconedIndex = null;
        this.$set(item,'isShow1',true)
       },

       //获取用户所有的评论列表
       getDisList(current,pageSize){
        this.$p({
            url: this.$api.getTreeHole,
            params:{
              type: 3,
              current: current,
              pageSize: pageSize
            }
        }).then(res=>{
            if(res.code == 0){
                console.log(res)
                this.allList = res.data.list
                this.total = res.data.total
            }
        },err=>{

        })
       }
    },
    mounted(){
        this.user = JSON.parse(this.$c.getStorage('userInfo'))
        
        this.getDisList(this.current,this.pageSize)
    }
}