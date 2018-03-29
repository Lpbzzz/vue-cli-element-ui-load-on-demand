<template>
    <div id="app">

        <el-button type="primary">
            <router-link to="/user" style="text-decoration: none;color:#fff">按钮1</router-link>
        </el-button>
        <el-button type="info">
            <router-link to="/" style="text-decoration: none;color:#fff">按钮1</router-link>
        </el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <router-view/>


    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {}
    }

</script>
