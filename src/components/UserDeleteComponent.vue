<template>
    <b-container fluid class="user-delete pt-3" v-if="userCurrent">
        <b-form @submit.prevent="deleteUser">

            <h2>Delete <b>{{ userCurrent.username }}</b>?</h2>

            <p>Are You sure? You want to delete
                <b>{{ userCurrent.username }}</b> from this Universe?
                He will be very upset...
            </p>

            <b-button type="submit" variant="danger">Delete</b-button>

            <router-link class="btn" v-bind:to="'/'">Cancel</router-link>

        </b-form>
    </b-container>
</template>

<script>

    import axios from 'axios';

    export default {
        props: ['id', 'user'],
        data () {
            return {
                userCurrent: null,
                endpoint: process.env.VUE_APP_API_URL + '/api/users'
            }
        },
        created () {
            if (!this.user) {
                axios.get(this.endpoint + '/' + this.id).then(response => {
                    this.userCurrent = response.data;
                }).catch(error => {
                    alert('error');
                    console.log('-----error-------');
                    console.log(error);
                })
            } else {
                this.userCurrent = this.user;
            }
        },
        methods: {
            deleteUser () {
                axios.delete(this.endpoint + '/' + this.id).then(() => {
                    this.$router.push({ name: 'user-list' });
                }).catch(error => {
                    alert('error');
                    console.log('-----error-------');
                    console.log(error);
                })
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>
