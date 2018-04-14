const Index = ()=>import('@/pages/index/index')

export default {
    routes: [
        {
            path: '/',
            name: Index,
            component: Index
        }
    ]
}