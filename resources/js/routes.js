import Home from '../components/frontEnd/home/index'
import About from '../components/frontEnd/about/index'
import Resume from '../components/frontEnd/resume/index'
import Skills from '../components/frontEnd/skills/index'
import Contact from '../components/frontEnd/contact/index'
import Admin from '../components/backEnd/admin/index'
import Dashboard from '../components/backEnd/dashboard/index'
import AdminHome from '../components/backEnd/home/index'
export const routes = [
    {
        path: '/',
        name: 'home',
        meta: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        meta: 'About',
        component: About
    },
    {
        path: '/resume',
        name: 'resume',
        meta: 'Resume',
        component: Resume
    },
    {
        path: '/skills',
        name: 'skills',
        meta: 'Skills',
        component: Skills
    },
    {
        path: '/contact',
        name: 'contact',
        meta: 'Contact',
        component: Contact
    },
    {
        path: '/admin',
        name: 'admin',
        meta: 'Login',
        component: Admin
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/admin-home',
        name: 'adminHome',
        meta: 'Home Page',
        component: AdminHome
    },
]
