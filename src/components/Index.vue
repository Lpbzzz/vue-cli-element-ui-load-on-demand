<template>
    <div class="hello">
        <h1>INDEX</h1>
        <router-link to="two" append>to two</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import Two from '@/components/Two'
    export default {
        data() {
            return {
                msg: 'iam index',
            }
        },
        methods: {
            console() {
                console.log(this.$router)
            }
        },
        mounted() {},
        computed: {

        }
    }

</script>
