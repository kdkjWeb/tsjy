export default{
    data(){
        return{
            user:{
                headerSrc: 'http://img1.imgtn.bdimg.com/it/u=615921465,2844161188&fm=27&gp=0.jpg',
                name: '某某某',
                accountnumber: '1234567890',
                newpas: '1234567890',
                successpas: '1234567890'
            },
            imgData: {  
                accept: 'image/gif, image/jpeg, image/png, image/jpg',  
            },
            changeSrc: ''
        }
    },
    methods: {
        //选择图片
        onFileChange(e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length)
            return;
            if(this.imgData.accept.indexOf(files[0].type) == -1){
                this.$message.error({
                    message: '请选择我们支持的图片',
                    center: true
                  });
                return false;
            }
            this.changeSrc = e.target.files[0]

            //调用创建图片
            this.createImage(files[0]);
		},
        //创建图片
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var that = this;
            reader.onload = (e) => {
            this.user.headerSrc = e.target.result
            };
            reader.readAsDataURL(file);
        },
        // 点击保存按钮
        save(){
            if(!this.user.name || !this.user.accountnumber || !this.user.newpas || !this.user.successpas){
                this.$message.error({
                    message: '你的内容还没有填写完成',
                    center: true
                  });
            }
        }
    }
}