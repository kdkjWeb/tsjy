export default{
  data(){
    return {
      src: '../../../static/phonograph.png',
      activeIndex: null,
      thisIndex: 2,
      showAlert: false,
      showSendAlert:false,
      tabBarList: [
        {"title": "精彩MUSIC"},
        {"title": "倾听FM"},
        {"title": "留声机"},
        {"title": "点播台"},
      ],
      jobList: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-04-16',
          title: '这是这段音频的标题',
          audioSrc: 'http://dl.stream.qqmusic.qq.com/C40000422Uev4dpLmR.m4a?vkey=2C29788CA53F1AADE306007E87979D8D78B72235D721ABB2554A1C0FE0CC331B03AE7907690B4B9AC4A3BE2FE86BE99B488A95BDBC550D98&guid=1970694656&uin=428632259&fromtag=66',
          isPlay: false,
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-04-16',
          title: '这是这段音频的标题',
          audioSrc: 'http://dl.stream.qqmusic.qq.com/C400000llUpv151MwI.m4a?vkey=74F810A2B809AB8564C2B16D14E88047EBB2F27A2E148649783A5A952569CD7165B7A3C366F3C688A2DE0661939A2AA158F68503A23B987A&guid=1970694656&uin=428632259&fromtag=66',
          isPlay: false,
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-06-16',
          title: '这是这段音频的标题',
          audioSrc: 'http://dl.stream.qqmusic.qq.com/C40000422Uev4dpLmR.m4a?vkey=2C29788CA53F1AADE306007E87979D8D78B72235D721ABB2554A1C0FE0CC331B03AE7907690B4B9AC4A3BE2FE86BE99B488A95BDBC550D98&guid=1970694656&uin=428632259&fromtag=66',
          isPlay: false,
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-05-16',
          title: '这是这段音频的标题',
          audioSrc: 'http://dl.stream.qqmusic.qq.com/C400000llUpv151MwI.m4a?vkey=74F810A2B809AB8564C2B16D14E88047EBB2F27A2E148649783A5A952569CD7165B7A3C366F3C688A2DE0661939A2AA158F68503A23B987A&guid=1970694656&uin=428632259&fromtag=66',
          isPlay: false,
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-04-20',
          title: '这是这段音频的标题',
          audioSrc: '../../../../static/audio.mp3',
          isPlay: false,
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-04-18',
          title: '这是这段音频的标题',
          audioSrc: '../../../../static/audio.mp3',
          isPlay: false,
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
          name: '张三',
          time: ' 2018-04-17',
          title: '这是这段音频的标题',
          audioSrc: '../../../../static/audio.mp3',
          isPlay: false,
        }
      ]
    }
  },
  methods: {
    toLink(index) {
      this.thisIndex = index;
      switch (index) {
        case 0:
          this.$router.push({
            name: 'music'
          });
          break;
        case 1:
          this.$router.push({
            name: 'music'
          });
          break;
        case 2:
          this.$router.push({
            name: 'phonograph'
          });
          break;
        case 3:
          this.showAlert = !this.showAlert;
          break;
      }
    },
    //播放音乐
    play(index){
      this.jobList[index].isPlay = !this.jobList[index].isPlay;
      var _m='audio'+index;
      var audio = this.$refs[_m][0];
      audio.play();
      if(index != this.activeIndex&&this.activeIndex!=null) {
          this.jobList[this.activeIndex].isPlay = !this.jobList[this.activeIndex].isPlay;
          var _mBefore = 'audio'+this.activeIndex;
          var audioBefore = this.$refs[_mBefore][0];
          audioBefore.pause();
          audioBefore.currentTime = 0;
      }else if(index == this.activeIndex&&this.jobList[index].isPlay==false) {
        var _mBefore = 'audio' + index;
        var audioBefore = this.$refs[_mBefore][0];
        audioBefore.pause();
      }
      this.activeIndex = index;
    },
    alertOpen(){
      this.showAlert = !this.showAlert;
    },
    showSendF(){
      this.showSendAlert = !this.showSendAlert;
    },
    toMusicDetail(){
      this.$router.push({
        name: "musicDetail"
      })
    },
  }
}
