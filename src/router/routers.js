/**
 * Created by kdkjPC on 2018/4/14.
 */
import index from '@/pages/index/index'
import employment from '@/pages/3_employment/0_activeH/activeH'
import recruitment from '@/pages/3_employment/1_recruitment/recruitment'
import job from '@/pages/3_employment/2_job/job'
import family from '@/pages/3_employment/3_family/family'



export default {
  routes: [
    {
      path:"/",
      name:index,
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
        }
      ]
    }
  ]
}
