/**
 * Created by kdkjPC on 2018/4/14.
 */
//首页
import index from '@/pages/index/index'
//就业
import employment from '@/pages/3_employment/0_activeH/activeH'
import recruitment from '@/pages/3_employment/1_recruitment/recruitment'
import job from '@/pages/3_employment/2_job/job'
import family from '@/pages/3_employment/3_family/family'
//活动
import activeH from '@/pages/10_active/0_activeH/activeH'
import affiche from '@/pages/10_active/1_affiche/affiche'
import luckDraw from '@/pages/10_active/2_luckDraw/luckDraw'
import vote from '@/pages/10_active/3_vote/vote'
import affichedetails from '@/pages/10_active/4_affichedetails/affichedetails'
import voteSign from '@/pages/10_active/3_1_voteSign/voteSign'
import voteSignForm from '@/pages/10_active/3_2_voteSignForm/voteSignForm'
import voteRanking from '@/pages/10_active/3_3_voteRanking/voteRanking'
import voteAffiche from '@/pages/10_active/3_4_voteAffiche/voteAffiche'
import voteVipDetail from '@/pages/10_active/3_5_voteVipDetail/voteVipDetail'
// 快讯
import fast from '@/pages/2_fast/fast/fast'
import fastdetails from '@/pages/2_fast/details/details'
// 视频
import video from '@/pages/4_video/video'
import wonderfulfilm from '@/pages/4_video/wonderfulfilm/wonderfulfilm'
import recommendfilm from '@/pages/4_video/recommendfilm/recommendfilm'
// 音乐
import music from '@/pages/5_music/music'
// 探城
import citySearcher from '@/pages/9_citySearcher/citySearcher'
//跳蚤
import flea from '@/pages/8_flea/flea'
//网红
import netred from '@/pages/6_netred/0_activeH/activeH'
import personal from '@/pages/6_netred/1_personal/personal'
import information from '@/pages/6_netred/3_information/information'
import atlas from '@/pages/6_netred/2_atlas/atlas'
import personaldetails from '@/pages/6_netred/4_personaldetails/personaldetails'
// 许愿树
import wish from '@/pages/7_wish/0_activeH/activeH'
import wishtree from '@/pages/7_wish/1_wishtree/wishtree'
import treeWar from '@/pages/7_wish/2_treeWar/treeWar'
import store from '@/pages/7_wish/3_store/store'

// 首页
let indexRoute = {
  path:"/",
  name:"index",
  component:index
};
// 快讯
let fastRoute = {
  fast:{
    path:"/fast",
    name:"fast",
    component:fast
  },
  fastdetails:{
  path: '/fastdetails',
    name: 'fastdetails',
  component: fastdetails
  }
};
// 就业
let employmentRoute = {
  path: '/employment',
  name: 'employment',
  component: employment,
  redirect: '/employment/recruitment',
  children: [
    {
      path: '/employment/recruitment',
      name: 'recruitment',
      component: recruitment
    },{
      path: '/employment/job',
      name: 'job',
      component: job
    },{
      path: '/employment/family',
      name: 'family',
      component: family
    } ]
};
// 视频
let videoRoute = {
  video:{
    path: "/video",
    name: "video",
    component: video
  },
  wonderful:{
  path: '/videoFilm',
  name: 'videoFilm',
  component: wonderfulfilm
  },
  recommendfilm:{
    path: '/videoReFilm',
    name: 'videoReFilm',
    component: recommendfilm
  }
};
// 音乐
let musicRoute = {
  path: "/music",
  name: "music",
  component: music
};
// 网红
let netRedRoute = {
  netRed:{
    path: '/netred',
    name: 'netred',
    component: netred,
    redirect: '/netred/personal',
    children: [
      {
        path: '/netred/personal',
        name: 'personal',
        component: personal
      },{
        path: '/netred/information',
        name: 'information',
        component: information
      },{
        path: '/netred/atlas',
        name: 'atlas',
        component: atlas
      }
    ]
  },
  personDetail:{
    path: '/netRedDetails',
    name: 'netRedDetails',
    component: personaldetails
  }

};
//许愿
let wishRoute = {
  path: '/wish',
  name: 'wish',
  component: wish,
  redirect: '/wish/wishtree',
  children: [
    {
      path: '/wish/wishtree',
      name: 'wishtree',
      component: wishtree
    },{
      path: '/wish/treeWar',
      name: 'treeWar',
      component: treeWar
    },{
      path: '/wish/store',
      name: 'store',
      component: store
    }
  ]
};
// 跳蚤
let fleaRoute = {
  path: '/flea',
  name: 'flea',
  component: flea
};
//探城
let cityRouter={
  path: '/citySearcher',
  name: 'citySearcher',
  component: citySearcher
};
// 活动
let activeRouter = {
  active:{
    path:"/active",
    name:"activeH",
    component:activeH,
    redirect:'/active/affiche',
    children:[{
      path:'/active/affiche',
      name:"affiche",
      component:affiche
    },{
      path:'/active/luckDraw',
      name:"luckDraw",
      component:luckDraw
    },{
      path:'/active/vote',
      name:"vote",
      component:vote
    },
    ]
  },
  affichedetails: {
    path: '/activeAffDetails',
    name: 'activeAffDetails',
    component: affichedetails
  },
  voteSign:{
    path:"/voteSign",
    name:"voteSign",
    component:voteSign
  },
  voteSignForm:{
    path:"/voteSignForm",
    name:"voteSignForm",
    component:voteSignForm
  },
  voteRanking:{
    path:"/voteRanking",
    name:"voteRanking",
    component:voteRanking
  },
  voteAffiche:{
    path:"/voteAffiche",
    name:"voteAffiche",
    component:voteAffiche
  },
  voteVipDetail:{
    path:"/voteVipDetail",
    name:"voteVipDetail",
    component:voteVipDetail
  }
};


export default {
  routes: [
    indexRoute,
    fastRoute.fast,fastRoute.fastdetails,
    employmentRoute,
    videoRoute.video,videoRoute.wonderful,videoRoute.recommendfilm,
    musicRoute,
    netRedRoute.netRed,netRedRoute.personDetail,
    wishRoute,
    fleaRoute,
    cityRouter,
    activeRouter.active,
    activeRouter.affichedetails,
    activeRouter.voteSign,
    activeRouter.voteSignForm,
    activeRouter.voteRanking,
    activeRouter.voteAffiche,
    activeRouter.voteVipDetail
  ]
}
