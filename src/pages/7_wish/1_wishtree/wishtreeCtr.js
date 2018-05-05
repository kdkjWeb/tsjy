export default{
    data() {
        return {
            wish: {
                content: '',
                name: ''
            },
            arrWishing: [], 
            current: 1,
        }
    },
    methods: {
        //点击许愿按钮
        send() {

            var user = JSON.parse(this.$c.getStorage('userInfo'))
            
            if(!this.wish.content || !this.wish.name){
                this.$message.error({
                    message: '错了哦，输入内容不全',
                    center: true
                  });
                return;
            }
            
            //判断用户是否登录
            if(!user){
                this.$message.error({
                    message: '您还没有登录，请登录！',
                    center: true
                  });
                  return;
            }


            this.$p({
                url: this.$api.wishingTree,
                params: {
                    type: 1,
                    userid: user.id,
                    content: this.wish.content,
                    realname: this.wish.name
                }
            }).then(res=>{
                if(res.code == 0){
                    this.$message({
                        message: '恭喜你，许愿成功',
                        type: 'success'
                      });
                      this.getWishList(this.current)
                      this.wish.content = '';
                      this.wish.name = '';
                }
            },err=>{
                this.$message.error('服务器异常');
            })
        },
        //点击上一棵
        preTree(){
            // if(this.current == 0){
            //     this.$message({
            //         message: '没有下一棵树了！',
            //         type: 'warning'
            //       });
            //     return;
            // }

            this.wish.content = '';
            this.wish.name = '';
            this.current--;
            this.getWishList(this.current)
        },
        //点击下一棵
        nextTree(){
            this.wish.content = '';
            this.wish.name = '';
            this.current++;
            this.getWishList(this.current)
        },
        //获取所有的许愿内容
        getWishList(current){
            this.$p({
                url: this.$api.getLeaves,
                params: {
                    pageSize: 180,
                    current: current,
                    orderBy: 'createtime',
                }
            }).then(res=>{
                if(res.msg == 502){
                    this.$message({
                        message: '没有下一棵树了！',
                        type: 'warning'
                      });
                      return;
                }
                if(res.code == 0){
                    this.arrWishing = res.data.list;
                    this.$nextTick(()=>{
                    //   this.random()
                    })              
                 }
            },err=>{

            })
        }
    },
    mounted(){
        this.getWishList(this.current)
    }
}