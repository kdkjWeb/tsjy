/**
 * Created by kdkjPC on 2018/4/19.
 */
export default {
  data() {
    return {
      src:"",
      form: {
        actId:"",
        userId:"",
        imgUrl:"",
        memeName: '',
        memeActName:'',
        gender: '',
        age: "",
        hight:"",
        weight:"",
        graduateSchool: '',
        nationality: '',
        nation:"",
        birthday:""
      }
    }
  },
  methods: {
    onSubmit() {
      for(var key in this.form) {
        if(this.form[key]=="") {
          this.$message({
            message: "请将信息填写完整",
            type: 'warning',
            duration: 1500
          });
          return;
        }
      }

      this.$p({
        url:this.$api.memeAdd,
        params:this.form
      }).then(res=>{
        this.$message({
          message: "提交成功",
          type: 'success',
          duration: 1500
        });
        this.$router.go(-1);
      },errRes=>{

      });
    },
    /**
     * 上传图片
     */
    upPic(e){
      var myFrom = new FormData();
      myFrom.append("imgFile", e.target.files[0]);
      this.previewPicture(e.target.files[0]);
      this.$p({
        url:this.$api.uploadFile,
        params:myFrom
      }).then(res=>{
        this.form.imgUrl = res.data.path;
      });
    },
    /**
     * 图片预览
     * @param file
     * @returns {boolean}
     */
    previewPicture(file){
      // 检查是否为图像类型
      var simpleFile = file;
      if (!/image\/\w+/.test(simpleFile.type)) {
        this.$message({
          message:"请确保文件为图像类型",
          type: 'warning',
          duration: 2000
        });
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(simpleFile);
      reader.onload = (e)=>{
        this.src = e.target.result;
      }
    },
  },
  mounted(){
    this.form.actId = this.$route.query.id;
    this.form.userId = JSON.parse(this.$c.getStorage("userInfo")).id;
  }
}
