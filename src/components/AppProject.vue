<script>
import axios from 'axios';

import AppCard from './AppCard.vue';


export default {
    components: {
        AppCard
    },
    data() {
        return {
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000',
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                if (response.data.success) {
                    this.projects = response.data.results;
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
                <div class="col-12 my-5">
                    <h1 class="text-center">Vite Boolfolio</h1>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex justify-content-center" v-if="loading">
                    <span class="loader"></span>
                </div>
                <div class="d-flex flex-wrap" v-else>
                    <AppCard v-for="(item, index) in projects" :project="item" :baseUrl="this.baseUrl"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>