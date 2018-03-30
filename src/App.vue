<template>
    <div id="app">

        <el-button type="primary" @click="routePush">
            按钮1
            <!-- router-link的方式，如果要在路径上累加的话，加append -->
            <!-- <router-link to="/user/zxc/vbn" style="text-decoration: none;color:#fff">按钮1</router-link> -->
        </el-button>
        <el-button type="info" @click="routePush2">
            按钮2
            <!-- <router-link to="/index/two/w/r" style="text-decoration: none;color:#fff">按钮1</router-link> -->
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
        methods: {
            routePush(){
                this.$router.push({path:'/user/zxc/vbn'})
            },
            // 编程式导航
            routePush2() {
                this.$router.push({ name: 'two',params:{name:'zxc',ue:'2ws'} })
            }
        }
    }

</script>
