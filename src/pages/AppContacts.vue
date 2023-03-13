<script>
import axios from 'axios';
import { store } from "../store.js";

export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            errors: {},
            success: false,
            sending: false,
            store
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }
            this.sending = true;
            this.errors = {};
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if (!(response.data.success)) {
                    this.errors = response.data.errors;
                    this.sending = false;
                }
                else {
                    this.name = '',
                        this.surname = '',
                        this.email = '',
                        this.phone = '',
                        this.message = '',
                        this.sending = false,
                        this.success = true

                }
            });
        }
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 mt-5">
                <h2 class="text-center">Pagina dei contatti</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 my-3">
                <h4 class="text-center"><em><strong>Informazioni</strong></em></h4>
                <div class="row text-center">
                    <div class="col-3">
                        <strong><i class="fas fa-map me-2"></i>Indirizzo: </strong>Via Alberoni 9, Niviano(PC), 29029
                    </div>
                    <div class="col-3">
                        <strong><i class="fas fa-book me-2"></i>Partita Iva: </strong>12345678901
                    </div>
                    <div class="col-3">
                        <strong><i class="fas fa-phone me-2"></i>Telefono: </strong>+039 0123 45 67 890
                    </div>
                    <div class="col-3">
                        <strong><i class="fas fa-envelope me-2"></i>Email: </strong>info@boolpres.com
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-green">
        <div class="row">
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <div class="text-center mt-3 d-flex justify-content-center">
                            <div class="alert alert-primary" v-if="success">
                                Inviato con successo
                            </div>
                        </div>
                        <div class="col-12 text-white">
                            <h4 class="text-center my-3"><em><strong>Scrivici</strong></em></h4>
                            <form @submit.prevent="sendForm">
                                <div class="row mb-3">
                                    <label for="nome" class="col-2 col-form-label text-end">Nome</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" v-model="name" >
                                        <div v-for="(error, index) in errors.name" :key="index" class="text-bg-danger">
                                            {{ error }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="cognome" class="col-2 col-form-label text-end">Cognome</label>
                                    <div class="col-9">
                                        <input type="text" class="form-control" id="cognome" name="cognome" placeholder="Cognome" v-model="surname">
                                        <div v-for="(error, index) in errors.surname" :key="index" class="text-bg-danger">
                                            {{ error }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="email" class="col-2 col-form-label text-end">Email</label>
                                    <div class="col-9">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="email">
                                        <div v-for="(error, index) in errors.email" :key="index" class="text-bg-danger">
                                            {{ error }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="telefono" class="col-2 col-form-label text-end">Telefono</label>
                                    <div class="col-9">
                                        <input type="phone" class="form-control" id="telefono" name="telefono" placeholder="Telefono" v-model="phone">
                                        <div v-for="(error, index) in errors.phone" :key="index" class="text-bg-danger">
                                            {{ error }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="messaggio" class="col-2 col-form-label text-end">Messaggio</label>
                                    <div class="col-9">
                                        <textarea class="form-control" name="messaggio" id="messaggio" placeholder="Messaggio" v-model="message"></textarea>
                                        <div v-for="(error, index) in errors.message" :key="index" class="text-bg-danger">
                                            {{ error }}
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mb-3">
                                    <button type="submit" class="btn btn-secondary" :disabled="sending"> {{ sending ? 'Sto inviando...' : 'Invia' }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-green {
    background-color: green;
}
</style>