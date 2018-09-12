<template>
    <b-container fluid class="user-add pt-3" v-if="userCurrent">
        <b-form @submit.prevent="onSubmit">

            <b-form-group id="form-user-add-username-group"
                          label="Username"
                          label-for="form-user-add-username-input"
            >
                <b-form-input id="form-user-add-username-input"
                              type="text"
                              v-model.trim="$v.form.username.$model"
                              :state="$v.form.username.$error ? false : null"
                              placeholder="Username" />
                <b-form-invalid-feedback  v-if="!$v.form.username.required">
                    This is a required field
                </b-form-invalid-feedback>
                <b-form-invalid-feedback  v-if="!$v.form.username.minLength">
                    Min length 4
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="form-user-add-firstname-group"
                          label="Username"
                          label-for="form-user-add-firstname-input"
            >
                <b-form-input id="form-user-add-firstname-input"
                              type="text"
                              v-model.trim="$v.form.first_name.$model"
                              :state="$v.form.first_name.$error ? false : null"
                              placeholder="First name" />
                <b-form-invalid-feedback  v-if="!$v.form.first_name.required">
                    This is a required field
                </b-form-invalid-feedback>
                <b-form-invalid-feedback  v-if="!$v.form.first_name.minLength">
                    Min length 4
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="form-user-add-lastname-group"
                          label="Username"
                          label-for="form-user-add-lastname-input"
            >
                <b-form-input id="form-user-add-lastname-input"
                              type="text"
                              v-model.trim="$v.form.last_name.$model"
                              :state="$v.form.last_name.$error ? false : null"
                              placeholder="Last name" />
                <b-form-invalid-feedback  v-if="!$v.form.last_name.required">
                    This is a required field
                </b-form-invalid-feedback>
                <b-form-invalid-feedback  v-if="!$v.form.last_name.minLength">
                    Min length 4
                </b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary">
                Submit
            </b-button>

            <router-link class="btn" v-bind:to="'/'">back</router-link>

        </b-form>
    </b-container>
</template>

<script>

    import axios from 'axios';
    import { validationMixin } from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'

    export default {
        props: ['id', 'user'],
        data () {
            return {
                form: {
                    username: '345345',
                    last_name: '',
                    first_name: ''
                },
                userCurrent: null,
                endpoint: process.env.VUE_APP_API_URL + '/api/users'
            }
        },
        created () {
            if (!this.user) {
                axios.get(this.endpoint + '/' + this.id).then(response => {
                    this.userCurrent = response.data;
                    this.setDefaultData();
                }).catch(error => {
                    alert('error');
                    console.log('-----error-------');
                    console.log(error);
                })
            } else {
                this.userCurrent = this.user;
                this.setDefaultData();
            }
        },
        mixins: [
            validationMixin
        ],
        validations: {
            form: {
                username: {
                    required,
                    minLength: minLength(4)
                },
                last_name: {
                    required,
                    minLength: minLength(4)
                },
                first_name: {
                    required,
                    minLength: minLength(3)
                }
            }
        },
        methods: {
            onSubmit () {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    axios.put(
                        this.endpoint + '/' + this.id,
                        this.form
                    ).then(() => {
                        this.$router.push({ name: 'user-list' });
                    }).catch(error => {
                        alert('error');
                        console.log('-----error-------');
                        console.log(error);
                    })
                }
            },
            setDefaultData () {
                this.form.username = this.userCurrent.username;
                this.form.last_name = this.userCurrent.last_name;
                this.form.first_name = this.userCurrent.first_name;
            }
        }
    }
</script>
