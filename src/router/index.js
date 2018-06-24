import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Quiz from '../components/Quiz.vue'
import Result from '../components/Result.vue'
import Thankyou from '../components/Thankyou.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/quiz",
            name: "quiz",
            component: Quiz
        },
        {
            path: "/result",
            name: "result",
            component: Result
        },
        {
            path: "/thankyou",
            name: "thankyou",
            component: Thankyou
        }
    ]
})