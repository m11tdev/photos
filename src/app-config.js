// Get the sidebar menu item from the router's setup
import routes from '@/router/routes';

const menuItems = routes.filter(route => !route.noSidebarLink).map(route => {

    return {
        text: route.meta.breadcrumbs[1].text,
        routerName: route.name,
        icon: route.icon || ''
    }

});

export default {

    user: PegVueUserConfig,
    app: {
        baseUrl: process.env.BASE_URL,
        title: process.env.VUE_APP_NAME,
        logoUrl: `${process.env.VUE_APP_PR_URL || ''}/peg-resources/${process.env.VUE_APP_PR_VERSION}/images/logo-landscape.jpg`,
        menuItems: menuItems
    }
};