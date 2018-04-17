/**
 * Created by kdkjPC on 2018/4/14.
 */
import index from '@/pages/index/index'
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
    }, {
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
