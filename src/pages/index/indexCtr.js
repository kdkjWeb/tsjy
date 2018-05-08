export default {
    data() {
        return {
            carousel: [
                {
                    title: '我们和刘雯聊了聊她的春夏衣橱',
                    content: '你不喜欢红色可能只因为觉得他不好穿，显黑啦，找不到场合啦等等，但是说真的，没有人比我们穿红色更美，为什么？往下看',
                    src: '../../../static/useImg/scroll1.png'
                },{
                    title: '我们和刘雯聊了聊她的春夏衣橱2',
                    content: '你不喜欢红色可能只因为觉得他不好穿，显黑啦，找不到场合啦等等，但是说真的，没有人比我们穿红色更美，为什么？往下看',
                    src: '../../../static/useImg/scroll2.png'
                },{
                    title: '我们和刘雯聊了聊她的春夏衣橱3',
                    content: '你不喜欢红色可能只因为觉得他不好穿，显黑啦，找不到场合啦等等，但是说真的，没有人比我们穿红色更美，为什么？往下看',
                    src: '../../../static/useImg/scroll3.png'
                }
            ],
            wish:{
                wishNav: [
                    {
                        title: '许愿树'
                    },{
                        title: '神秘树洞'
                    },{
                        title: '解忧杂货店'
                    }
                ],
                wishNext: [
                    {
                        firstTitle: '抽奖',
                        seconedTitle: 'LUCK DRAW'
                    },{
                        firstTitle: '热门活动',
                        seconedTitle: 'POPULAR ACTIVITY'
                    }
                ]
            },
            alerts: {
                header: [
                    {
                        title: '资讯'
                    },{
                        title: '招聘'
                    },{
                        title: '求职'
                    },{
                        title: '家教'
                    },{
                        title: '跳蚤'
                    }
                ],
                notice: [
                    {
                        type: '数学',
                        content: '招募全职培训班数学老师',
                        time: '2018-02-04'
                    },{
                        type: '绘画',
                        content: '招募全职古风少女条漫主笔',
                        time: '2018-02-05'
                    },{
                        type: '英语',
                        content: '招募全职培训班英语老师',
                        time: '2018-02-06'
                    },{
                        type: '语文',
                        content: '招募全职培训班语文老师',
                        time: '2018-02-07'
                    },{
                        type: '舞蹈',
                        content: '招募全职培训班舞蹈老师',
                        time: '2018-02-08'
                    },{
                        type: '数学',
                        content: '招募全职培训班数学老师',
                        time: '2018-02-04'
                    },{
                        type: '数学',
                        content: '招募全职培训班数学老师',
                        time: '2018-02-04'
                    }
                ],
                leftTopShow:{
                    src: 'http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg'
                },
                leftBottomShow: {
                    src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                    title: '万能家教'
                }
            },
            amusement: {
                header: [
                    {
                        title: '精彩VIEDEO'
                    },{
                        title: '推荐影视'
                    },{
                        title: '倾听FM'
                    },{
                        title: '精彩MUSIC'
                    },{
                        title: '留声机'
                    },{
                        title: '点歌台'
                    }
                ],
                btn: '>',
                btnFlag: false,
                video: {
                    src: 'http://ugcws.video.gtimg.com/n0399r7p6ai.m701.mp4?vkey=44CB870471A0FE0CC8DDE3B132AAA3BD8EB700249AF640DC1C056B534F821F6A02846517ED59DD2796D4DF642A6013E64DBE4603ADAE0E942E796C23F903D03F00AC69150605248B7D9118CC923C7B4BA82DD5E95C5C6CEBA9B617B7AD72D536981E93CE2A0567E86F13F9547EBF91EB9A7DBA69ED797A22&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598',
                    bgSrc: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg'
                },
                videoList: [
                    {
                        src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcws.video.gtimg.com/n0399r7p6ai.m701.mp4?vkey=44CB870471A0FE0CC8DDE3B132AAA3BD8EB700249AF640DC1C056B534F821F6A02846517ED59DD2796D4DF642A6013E64DBE4603ADAE0E942E796C23F903D03F00AC69150605248B7D9118CC923C7B4BA82DD5E95C5C6CEBA9B617B7AD72D536981E93CE2A0567E86F13F9547EBF91EB9A7DBA69ED797A22&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    },{
                        src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                        title: '弄你喀什就啊阿卡萨卡萨弄你喀什就啊阿卡萨卡萨',
                        videosrc: 'http://ugcydzd.qq.com/n0500gyfy0d.m701.mp4?vkey=AE062E3FB2918AF4C50EA5EC07E4496788AF64415F8795F7B3C37C0588E50DD32B2ED22D08E91235747C81E8EA5B3494200405DFF4A11448004015EF9DA1C662F9F45441136C593F912D7A72B48D442EF1C0AFB193DC29F3F800E575AC0DD4E9E27B367B061AD752E63350D7F632EFF832D726DC86ECEB55&br=14&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=e6208066eecaa6998591391ddc7c9598'
                    }
                ]
            },
            exploreCity: {
                header: [
                    {
                        title: '探吃'
                    },{
                        title: '探玩'
                    },{
                        title: '探逛'
                    }
                ],
                leftShow: {
                    src: 'http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg',
                    title: '展示标题',
                    time: '2018-04-16'
                },
                leftTopShow:{
                    src: 'http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg',
                    title: '展示标题',
                    time: '2018-04-16'
                },
                leftBottomShow: {
                    src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                    title: '万能家教',
                    time: '2018-04-16'
                }
            },
            netRed: {
                header: [
                    {
                        title: '个人展示'
                    },{
                        title: '最新资讯'
                    },{
                        title: '个人图集'
                    }
                ],
                leftShow: {
                    src: 'http://pic36.photophoto.cn/20150708/0034034816424961_b.jpg',
                    title: '展示标题',
                    time: '2018-04-16'
                },
                leftTopShow:{
                    src: 'http://pic35.photophoto.cn/20150519/0034034853356364_b.jpg',
                    title: '展示标题',
                    time: '2018-04-16'
                },
                leftBottomShow: {
                    src: 'http://pic11.photophoto.cn/20090529/0034034544305310_b.jpg',
                    title: '万能家教',
                    time: '2018-04-16'
                }
            }
        }
    },
    methods: {
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
        //点击许愿树右侧
        wishNext(index){
            switch(index){
                case 0:
                this.$router.push({
                    name: 'luckDraw'
                })
                break;
                case 1:
                this.$router.push({
                    name: 'affiche'
                })
                break;
            }
        },
        //点击许愿树左侧
        wishNav(index){
            switch(index){
                case 0:
                this.$router.push({
                    name: 'wishtree'
                })
                break;
                case 1:
                this.$router.push({
                    name: 'treeWar'
                })
                break;
                case 2:
                this.$router.push({
                    name: 'store'
                })
                break;
            }
        },
        //点击资讯模块的标题到指定页面
        goInformation(index){
            switch(index){
                case 0:
                this.$router.push({
                    name: 'fast'
                })
                break;
                case 1:
                this.$router.push({
                    name: 'recruitment'
                })
                break;
                case 2:
                this.$router.push({
                    name: 'job'
                })
                break;
                case 3:
                this.$router.push({
                    name: 'family'
                })
                break;
                case 4:
                this.$router.push({
                    name: 'flea'
                })
                break;
            }
        },
        // 点击娱乐模块到指定页面
        goEntertainment(index){
            switch(index){
                case 0:
                this.$router.push({
                    name: 'video',
                    params:{
                        type: 1
                    }
                })
                break;
                case 1:
                this.$router.push({
                    name: 'video',
                    params:{
                        type: 1
                    }
                })
                break;
                case 2:
                this.$router.push({
                    name: 'music',
                    params:{
                        type: 1
                    }
                })
                break;
                case 3:
                this.$router.push({
                    name: 'music',
                    params:{
                        type: 1
                    }
                })
                break;
                case 4:
                this.$router.push({
                    name: 'phonograph'
                })
                break;
                case 5:
                this.$router.push({
                    name: 'musicDetail'
                })
                break;
            }
        },
        //点击探城模块到指定页面
        goExploreCity(index){
            switch(index){
                case 0:
                this.$router.push({
                    name: 'citySearcher',
                    params:{
                        type: 1
                    }
                })
                break;
                case 1:
                this.$router.push({
                    name: 'citySearcher',
                    params:{
                        type: 2
                    }
                })
                break;
                case 2:
                this.$router.push({
                    name: 'citySearcher',
                    params:{
                        type: 3
                    }
                })
                break;
            }
        },
        //点击网红模块到指定页面
        goNetRed(index){
            switch(index){
                case 0:
                this.$router.push({
                    name: 'personal'
                })
                break;
                case 1:
                this.$router.push({
                    name: 'information'
                })
                break;
                case 2:
                this.$router.push({
                    name: 'atlas'
                })
                break;
            }
        }
    }
}
