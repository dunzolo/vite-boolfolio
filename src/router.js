//1 - importare createRouter e createWebHistory
import { createRouter, createWebHistory } from "vue-router";

//2 - importare le componenti rappresentanti le pagine
import AppHomePage from './pages/AppHomePage.vue';
import AppProject from './pages/AppProject.vue';


//3 - creo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: AppHomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProject
        }
    ]
});

//4 - esportare il router
export { router };