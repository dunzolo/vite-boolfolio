<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            project: null,
            loading: true
        }
    },
    mounted() {
        this.loading = true;
        axios.get(`${store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                this.project = response.data.project;
                this.loading = false;
            }
            else {
                this.$router.push({ name: 'not-found' });
            }
        })
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 mt-5">
                <h1 class="text-center">Dettaglio del progetto</h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div v-if="loading">
                <span class="loader my-5"></span>
            </div>
            <div class="col-8 my-3" v-else>
                <div class="d-flex">
                    <div class="col-6">
                        <div class="card">
                            <img class="card-cover" :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-body mx-2">
                            <h2 class="card-title mb-2"><strong>{{project.title}}</strong></h2>
                            <div class="mb-2"><em><strong>Categoria: </strong>{{project.type.name}}</em></div>
                            <div class="mb-2" v-if="project.technologies.length > 0">
                                <em><strong>Tecnologia: </strong>
                                    <span class="badge bg-primary mx-1" v-for="(technology, index) in project.technologies" :key="index">{{technology.name}}</span>
                                </em>
                            </div>
                            <p class="card-text">{{project.content}}</p>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="text-center">
                <router-link :to="{ name:'projects'}" class="btn btn-sm btn-primary">Torna a elenco</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 20px;

    .card-cover {
        border-radius: 20px;
        height: 500px;
        object-fit: cover;
    }
}
</style>