export default{
    data() {
        return {
            currentPage1:5,
            netredList: [
                {
                    src: 'http://pic30.nipic.com/20130621/7447430_093529761000_2.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://pic30.nipic.com/20130621/7447430_093529761000_2.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://pic30.nipic.com/20130621/7447430_093529761000_2.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    name: '美女图片',
                    title: '如果实现单行文本的溢出显示'
                }
            ]
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        },
        //查看详情页面
        details(item){
            this.$router.push({
                name: 'atlasdetails'
            })
        }
    }
}