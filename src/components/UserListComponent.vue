<template>
    <b-container fluid class="user-list pt-3">

        <b-row class="user-list__create-block mb-3">
            <b-col col md="9"> </b-col>
            <b-col col md="3">
                <b-button :to="{name: 'user-add'}" :block="true" variant="primary">
                    Add
                </b-button>
            </b-col>
        </b-row>

        <b-row class="mb-3 d-md-none d-lg-none d-xl-none">
            <b-col>
                <b-form-group horizontal label="Sort" class="mb-0">
                    <b-input-group>
                        <b-form-select v-model="sortBy" :options="sortOptions">
                            <option slot="first" :value="null">-- none --</option>
                        </b-form-select>
                        <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>

        <b-table show-empty
                 stacked="md"
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 :sort-direction="sortDirection"
                 @filtered="onFiltered"
        >
            <template slot="actions" slot-scope="row">
                <b-button size="sm" :to="{name: 'user-edit', params: {id: row.item.id, user: row.item}}" class="mr-1">
                    Edit
                </b-button>
                <b-button size="sm" :to="{name: 'user-delete', params: {id: row.item.id, user: row.item}}">
                    Delete
                </b-button>
            </template>
        </b-table>

        <b-row class="mb-3">
            <b-col md="6">
                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
            </b-col>
        </b-row>

    </b-container>
</template>

<script>

    import axios from 'axios';

    export default {
        data () {
            return {
                items: [],
                fields: [
                    { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                    { key: 'username', label: 'Username', sortable: true },
                    { key: 'first_name', label: 'First name', sortable: true },
                    { key: 'last_name', label: 'Last name', sortable: true },
                    { key: 'created', label: 'Created', sortable: true },
                    { key: 'actions', label: 'Actions' }
                ],
                currentPage: 1,
                perPage: 5,
                totalRows: 0,
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                endpoint: process.env.VUE_APP_API_URL + '/api/users'
            }
        },
        created () {
            this.getAllUsers();
        },
        computed: {
            sortOptions () {
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => { return { text: f.label, value: f.key } });
            }
        },
        methods: {
            getAllUsers () {
                axios.get(this.endpoint).then(response => {
                    this.items = response.data;
                    this.totalRows = this.items.length;
                }).catch(error => {
                    alert('error');
                    console.log('-----error-------');
                    console.log(error);
                })
            },
            onFiltered (filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
            }
        }
    }
</script>
