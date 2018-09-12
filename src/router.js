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
            redirect: { name: 'user-list' }
        },
        {
            path: '/users',
            name: 'user-list',
            component: UserListComponent
        },
        {
            path: '/users/edit/:id',
            name: 'user-edit',
            component: UserEditComponent,
            props: true
        },
        {
            path: '/users/delete/:id',
            name: 'user-delete',
            component: UserDeleteComponent,
            props: true
        },
        {
            path: '/users/create',
            name: 'user-add',
            component: UserAddComponent
        }
    ]
})
