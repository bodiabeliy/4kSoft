import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routers = [

    {
        path: '/',
        component: () => ('@/components/Photos.vue')
    },
    {
        path: '/photos',
        component: () => ('@/components/Photos.vue')
    }
]

// export default VueRouter({
//     mode: 'history',
//     routers
//   }
// )
