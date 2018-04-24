export default{
    data(){
        return{
            src: '../../../static/phonograph.png',
            activeIndex: null,
            thisIndex:0,
            isPlay: false,
            tabBarList:[
                {"title":"精彩MUSIC"},
                {"title":"倾听FM"},
                {"title":"留声机"},
                {"title":"点播台"},
            ],
            jobList: [
                {
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-04-16',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-04-16',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-06-16',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-05-16',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-04-20',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-04-18',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                },{
                    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523947765539&di=1f17c730cabf2559e8a07b797cbb924b&imgtype=0&src=http%3A%2F%2Fnewimg.uumnt.com%2FThumb%2F2017%2F0112%2Fb57a1230e7af1478d8396a5fa436a7e6.jpg',
                    name: '张三',
                    time: ' 2018-04-17',
                    title: '这是这段音频的标题',
                    audioSrc: '../../../../static/audio.mp3'
                }
            ]
        }
    },
    methods: {
        toLink(index) {
            this.thisIndex = index;
            switch(index){
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
              this.$router.push({
                name: 'phonograph'
              });
              break;
            }
          },
        //播放音乐
        play(index,e){
            if(!this.isPlay&&!this.activeIndex){
                this.activeIndex = index
                this.isPlay = !this.isPlay
                // console.log(e.target.nextSibling)
                e.currentTarget.nextElementSibling.style.background = 'red'
            }else if(this.isPlay){
                if(this.activeIndex == index){
                    this.activeIndex = null
                }else{
                    this.activeIndex = index
                }
            }
        }
    }
}