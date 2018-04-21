export default{
    data() {
        return {
            left: 0,
            top: 0,
            user: {
                src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                name: '某某某',
                stagename: '全球经济治理滞后',
                sex: '女',
                country: '中国',
                ethnic: '汉',
                age: '18',
                weight: '48',
                height: '170',
                school: '中国传媒大学',
                birthday: '2000-05-20',
                srcList: [
                    {
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg'
                    },{
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg'
                    },{
                        src: 'http://pic10.photophoto.cn/20090226/0036036161693462_b.jpg'
                    },{
                        src: 'http://up.enterdesk.com/edpic_source/10/ba/dc/10badc1160a87857970c7f9aaef3e2f6.jpg'
                    },{
                        src: 'http://img1.3lian.com/2015/a1/95/d/149.jpg'
                    },{
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg'
                    },{
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg'
                    },{
                        src: 'http://pic10.photophoto.cn/20090226/0036036161693462_b.jpg'
                    },{
                        src: 'http://up.enterdesk.com/edpic_source/10/ba/dc/10badc1160a87857970c7f9aaef3e2f6.jpg'
                    },{
                        src: 'http://img1.3lian.com/2015/a1/95/d/149.jpg'
                    }
                ],
                otherList: [
                    {
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                        name: '第一个人的名字'
                    },{
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                        name: '第二个人的名字'
                    },{
                        src: 'http://pic10.photophoto.cn/20090226/0036036161693462_b.jpg',
                        name: '第三个人的名字'
                    },{
                        src: 'http://up.enterdesk.com/edpic_source/10/ba/dc/10badc1160a87857970c7f9aaef3e2f6.jpg',
                        name: '第四个人的名字'
                    },{
                        src: 'http://img1.3lian.com/2015/a1/95/d/149.jpg',
                        name: '第五个人的名字'
                    },{
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                        name: '第一个人的名字'
                    },{
                        src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                        name: '第二个人的名字'
                    },{
                        src: 'http://pic10.photophoto.cn/20090226/0036036161693462_b.jpg',
                        name: '第三个人的名字'
                    },{
                        src: 'http://up.enterdesk.com/edpic_source/10/ba/dc/10badc1160a87857970c7f9aaef3e2f6.jpg',
                        name: '第四个人的名字'
                    },{
                        src: 'http://img1.3lian.com/2015/a1/95/d/149.jpg',
                        name: '第五个人的名字'
                    }
                ]
            }
        }
    },
    methods:{
        //点击图片切换上面的图片
        changeImg(item,index){
           if(index == 0){
            this.user.src = item.src
           }else if(index == 1){
            this.user.src = item.src
            this.user.name = item.name
           }
        },
        //点击左侧箭头,上
        pre(index){
            if(index == 0){
                this.top -= 175;
                let top = (this.user.srcList.length-4)*175;
                if(parseInt(this.$refs.imgList1.style.top) == -top){
                    this.top = -top;
                    this.$refs.imgList1.style.top = this.top + 'px';
                }
                this.$refs.imgList1.style.top = this.top + 'px';
            }else if(index == 1){
                this.left -= 245;
                let left = (this.user.srcList.length-4)*245;
                if(parseInt(this.$refs.imgList.style.left) == -left){
                    this.left = -left;
                    this.$refs.imgList.style.left = this.left + 'px';
                }
                this.$refs.imgList.style.left = this.left + 'px';
            }  
        },
        //点击右侧箭头，下
        next(index){
            if(index == 0){
                this.top += 175;
                if(parseInt(this.$refs.imgList1.style.top) == 0){
                    this.top = 0;
                    this.$refs.imgList1.style.top = this.top + 'px';
                }
                this.$refs.imgList1.style.top = this.top + 'px';
            }else if(index == 1){
                this.left += 245;
                if(parseInt(this.$refs.imgList.style.left) == 0){
                    this.left = 0;
                    this.$refs.imgList.style.left = this.left + 'px';
                }
                this.$refs.imgList.style.left = this.left + 'px';
            }
        },
    }
}