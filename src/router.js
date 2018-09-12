import Vue from 'vue'
import Router from 'vue-router'
import UserListComponent from './components/UserListComponent.vue'
import UserEditComponent from './components/UserEditComponent.vue'
import UserAddComponent from './components/UserAddComponent.vue'
import UserDeleteComponent from './components/UserDeleteComponent.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'user-list',
            component: UserListComponent
        },
        {
            path: '/user/:id/edit',
            name: 'user-edit',
            component: UserEditComponent,
            props: true
        },
        {
            path: '/user/:id/delete',
            name: 'user-delete',
            component: UserDeleteComponent,
            props: true
        },
        {
            path: '/user-add',
            name: 'user-add',
            component: UserAddComponent
        }
    ]
})
