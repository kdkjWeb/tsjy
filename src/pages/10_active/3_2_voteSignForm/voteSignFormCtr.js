/**
 * Created by kdkjPC on 2018/4/19.
 */
export default {
  data() {
    return {
      src:"",
      form: {
        name: '',
        nickname: '',
        sex: '',
        year: "",
        height: "",
        weight: '',
        school: '',
        country: '',
        native:'',
        date:''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    /**
     * 上传图片
     */
    upPic(e){
      // var myFrom = new FormData();
      // myFrom.append("id", this.id);
      // myFrom.append("file", e.target.files[0]);
      this.previewPicture(e.target.files[0]);
      // this.$p({
      //   url: "carousel/uploadPic",
      //   params:myFrom
      // }).then(res=>{
      //   this.$message({
      //     message:"上传图片成功",
      //     type: 'success',
      //     duration: 2000
      //   });
      // });
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
  }
}