import HomeComponent from './components/Home.vue'
import AddComponent from './components/Add.vue'
import UpdateComponent from './components/Update.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/Login.vue'
// import { createWebHistory } from 'vue-router'
import * as VueRouter from 'vue-router';


const routes = [
    {
        name: 'HomeComponent',
        component: HomeComponent,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signUp'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddComponent',
        component: AddComponent,
        path: '/add'
    },
    {
        name: 'UpdateComponent',
        component: UpdateComponent,
        path: '/update/:id'
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router

