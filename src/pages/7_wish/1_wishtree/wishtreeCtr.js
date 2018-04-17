export default{
    data() {
        return {
            wish: {
                content: '',
                name: ''
            }
        }
    },
    methods: {
        //点击许愿按钮
        send() {
            if(!this.wish.content || !this.wish.name){
                this.$message.error({
                    message: '错了哦，输入内容不全',
                    center: true
                  });
            }
        },
        //点击上一棵
        preTree(){

        },
        //点击下一棵
        nextTree(){

        }
    }
}