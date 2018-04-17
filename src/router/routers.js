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
      }
  ]
}
