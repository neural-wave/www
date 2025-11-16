import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('../views/FaqView.vue')
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: () => import('../views/ScheduleView.vue')
        },
        {
            path: '/location',
            name: 'location',
            component: () => import('../views/LocationView.vue')
        },
        {
            path: '/series/',
            name: 'series',
            component: () => import('../views/SeriesListView.vue')
        },
        {
            path: '/series/:year',
            name: 'series_year',
            component: () => import('../views/SeriesView.vue')
        },
    ]
})

export default router