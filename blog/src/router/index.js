import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () => import('../views/index/index')
const detail = () => import('../views/detail/detail')
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/detail',
        component: detail
    }]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router