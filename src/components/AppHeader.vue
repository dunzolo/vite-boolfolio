<script>
export default {
    data() {
        return {
            menu_items: [
                {
                    label: 'Homepage',
                    route_name: 'homepage'
                },
                {
                    label: 'Projects',
                    route_name: 'projects'
                },
                {
                    label: 'Contacts',
                    route_name: 'contacts'
                }
            ]
        }
    },
}
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-md background-nav">
            <div class="container">
                <div class="navbar-brand">
                    <img src="/boolean-logo.png" alt="logo" class="w-25">
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menu_items" :key="index">
                            <router-link :to="{ name: item.route_name }" class="nav-link text-white"> {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.background-nav {
    background-color: green;
}
</style>