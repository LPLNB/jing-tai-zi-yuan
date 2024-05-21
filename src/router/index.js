import { createWebHistory , createRouter } from 'vue-router'
import NavigationMenu from './NavigationMenu.js'
import NotNavigationMenu from './NotNavigationMenu.js'

const routes = [...NavigationMenu, ...NotNavigationMenu]

const router = createRouter({
    history: createWebHistory (),
    routes
})

export default router
