
import Home from '@/Home';

export default [
    {
        path: '/',
        component: Home,
        name: 'app',
    },
    {
        path: '/view/:id',
        component: Home,
        name: 'view',
        props (route) { // See - https://forum.vuejs.org/t/router-vue-props-type-number-didnt-cast/25774
            const props = {...route.params}
            props.id = +props.id
            return props
        }
    },
    {
        path: '*',
        component: Home,
        name: '404',
    }
];
