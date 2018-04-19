export default{
    data() {
        return {
            firstIndex: null,
            seconedIndex: null,
            threeIndex: null,
            currentPage1:5,
            content: '',
            firstContent: '',
            seconedContent: '',
            threeContent: '',
            userImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
            allList: [
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
            ]
        }
    },
    methods: {
        //点击发送按钮
        send() {
            if(!this.content){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
            }

        },
        firstSend() {
            if(!this.firstContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
            }
            this.firstIndex = null;
        },
        seconedSend() {
            if(!this.seconedContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
            }
            this.seconedIndex = null;
        },
        threeSend(){
            if(!this.threeContent){
                this.$message.error({
                    message: '请说出你的忧愁，让大家帮你一起解忧！',
                    center: true
                  });
            }
            this.threeIndex = null;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        },
       //评论楼主的问题
       firstDis(index){
        this.firstIndex = index;
        this.seconedIndex = null;
        this.threeIndex = null;
       },
       //楼主用户交叉评论
       seconedDis(index){
        this.seconedIndex = index;
        this.firstIndex = null;
        this.threeIndex = null;
       },
       threeDis(index){
        this.threeIndex = index;
        this.firstIndex = null;
        this.seconedIndex = null;
       }
    }
}