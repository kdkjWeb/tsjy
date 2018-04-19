/**
 * Created by kdkjPC on 2018/4/18.
 */

export default {
    name:"loginReg",
    data(){
      return {
        text:"发送手机",
        disabled:false
      }
    },
  props:{
    show:{
      type:Boolean,
      required:true,
      "default":true
    },
    login:{
      type:Boolean,
      required:true,
      "default":true
    },
    textTitle:{
      type:String,
      required:true,
      "default":"注册"
    }
  },
  methods:{
    close(){
      this.$emit("close");
    },
    toReg(item){
      this.$emit("toReg",item);
    },
    sendCode(){
      var time = 60;
      this.disabled = true;
      this.text = time+"s后发送";
      var s = setInterval(()=>{
        time--;
        this.text = time+"s后发送";
        if(time == 0) {
          clearInterval(s);
          this.disabled = false;
          this.text = "发送手机";
        }
      },1000);
    }
  },
  mounted(){
  }
}
