<template>
    <div class="hello">
        <h2>TWO</h2>
        <router-link to="/index">to index</router-link>
        {{$route.params.name}} {{$route.params.ue}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'iam two ',
            }
        },
        methods: {},
        mounted() {},
        computed: {}
    }

</script>
