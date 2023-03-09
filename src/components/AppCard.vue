<script>
export default {
    props: {
        project: Object,
        baseUrl: String
    },
    methods: {
        substringContent(content) {
            return content.substring(0, 50) + '...';
        }
    },
}
</script>

<template lang="">
    <div class="col-3 my-3">
        <div class="mx-1 h-100">
            <div class="card h-100">
                <div class="height-500">
                    <img class="card-img-top"
                        :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'">
                </div>
                <div class="card-body">
                    <h5 class="card-title"><strong>{{project.title}}</strong></h5>
                    <div class="mb-2"><em><strong>Categoria: </strong>{{project.type.name}}</em></div>
                    <div class="mb-2">
                        <em><strong>Tecnologia: </strong>
                            <span class="badge bg-primary" v-for="(technology, index) in project.technologies" :key="index">{{technology.name}}</span>
                        </em>
                    </div>
                    <p class="card-text">{{this.substringContent(project.content)}}</p>
                </div>
                <div class="card-footer text-center">
                    <a href="#" class="btn btn-primary">Continua a leggere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.height-500 {
    height: 500px;

    img {
        height: 100%;
        width: 100%;
    }
}
</style>