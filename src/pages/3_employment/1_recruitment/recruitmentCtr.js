export default{
    data() {
        return {
            currentPage1:5,
            jobList: [
                {
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: '数学',
                    content: '数学老师周末兼职',
                    time: ' 2018-04-16',
                    price: '面议',
                    unit: '天'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: '物理',
                    content: '数学老师周末兼职',
                    time: ' 2018-04-16',
                    price: '700',
                    unit: '天'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: '数学',
                    content: '数学老师周末兼职',
                    time: ' 2018-06-16',
                    price: '30',
                    unit: '小时'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: ' 美术',
                    content: '数学老师周末兼职',
                    time: ' 2018-05-16',
                    price: '2k-5k',
                    unit: '月'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: '英语',
                    content: '数学老师周末兼职',
                    time: ' 2018-04-20',
                    price: '500',
                    unit: '天'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: '语文',
                    content: '数学老师周末兼职',
                    time: ' 2018-04-18',
                    price: '400',
                    unit: '天'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    subject: '数学',
                    content: '数学老师周末兼职',
                    time: ' 2018-04-17',
                    price: '350',
                    unit: '天'
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
      toJobDetail(){
          this.$router.push({
            name:"jobDetail"
          })
      }
    }
}
