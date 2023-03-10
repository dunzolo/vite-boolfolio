<script>
import axios from 'axios';
import { store } from '../store.js';

import AppCard from './AppCard.vue';


export default {
    components: {
        AppCard
    },
    data() {
        return {
            store,
            projects: [],
            loading: true,
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getProjects(this.currentPage);
    },
    methods: {
        getProjects(project_page) {
            axios.get(`${store.baseUrl}/api/projects`, { params: { page: project_page } }).then((response) => {
                if (response.data.success) {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                }
            })
        }
    },
}
</script>

<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5">
                    <h1 class="text-center">Vite Boolfolio</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center" v-if="loading">
                        <span class="loader my-5"></span>
                    </div>
                    <div class="d-flex flex-wrap" v-else>
                        <AppCard v-for="(item, index) in projects" :project="item"/>
                        <div class="col-12">
                            <nav>
                                <ul class="pagination d-flex justify-content-center">
                                    <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage - 1)">Prev</button>
                                    </li>
                                    <li :class="currentPage === item ? 'disabled' : 'page-item'" v-for="item in lastPage">
                                        <button class="page-link" @click="getProjects(item)">{{item}}</button>
                                    </li>
                                    <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>