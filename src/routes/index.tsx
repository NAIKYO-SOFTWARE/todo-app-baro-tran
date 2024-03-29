import { Home,Page, Login, Profile, Transition }from "../views"

//Public routes

const publicRoutes = [
    {path: '/', component: Page, isFooter: false},
    {path: '/login', component: Login, isFooter: true},
    {path: '/home', component: Home, isFooter: true},
    {path: '/profile', component: Profile,  isFooter: false},
    {path: '/transition', component: Transition},
]

export { publicRoutes };