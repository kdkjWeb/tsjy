export default{
    data() {
        return {
            currentPage1:5,
            informationList: [
                {
                   src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                   title: '2018年终极考核',
                   content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                   time: '2018-04-17'
                },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
                 },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
                 },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
                 },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
                 },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
                 },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
                 },{
                    src: 'http://img2.imgtn.bdimg.com/it/u=862591842,2864954084&fm=27&gp=0.jpg',
                    title: '2018年终极考核',
                    content: '公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex',
                    time: '2018-04-17'
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
        //点击到详情页面
        details(item){
            this.$router.push({
                name: 'imformationdetails'
            })
        }
    }
}