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
import fast from '@/pages/2_fast/fast'
import video from '@/pages/4_video/video'

//跳蚤
import flea from '@/pages/8_flea/flea'

//网红
import netred from '@/pages/6_netred/0_activeH/activeH'
import personal from '@/pages/6_netred/1_personal/personal'
import information from '@/pages/6_netred/3_information/information'
import atlas from '@/pages/6_netred/2_atlas/atlas'


export default {
  routes: [
    {
      path:"/",
      name:"name",
      component:index
    },{
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
      },{
      path:"/fast",
      name:"fast",
      component:fast
    }, {
      path: "/video",
      name: "video",
      component: video
    },{
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
      },{
        path: '/flea',
        name: 'flea',
        component: flea
      },{
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
      }
  ]
}
