//1 - importare createRouter e createWebHistory
import { createRouter, createWebHistory } from "vue-router";

//2 - importare le componenti rappresentanti le pagine
import AppHomePage from './pages/AppHomePage.vue';
import AppProject from './pages/AppProject.vue';
import AppSingleProject from './pages/AppSingleProject.vue';
import AppNotFound from './pages/AppNotFound.vue';

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
        },
        {
            //rotta del dettaglio
            path: '/projects/:slug', //con :nome_parametro andiamo a passare il parametro per visualizzare il desttaglio
            name: 'single-project',
            component: AppSingleProject
        },
        {
            //da inserire sempre per ultima
            path: '/*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

//4 - esportare il router
export { router };