<template>
    <div class="hello">
        <h1>{{ msg }}{{ $route.params.id }}{{ $route.params.name}}</h1>
        <h3>{{COM}}</h3>
        <h3>传递信息到父级1111aasa1</h3>
        <button @click="change">111</button>
        <Children fff="msg2" v-on:listenA="listen"></Children>
        <p>{{childwords}}</p>
        <chil-com></chil-com>
    </div>
</template>

<script>
    import Children from './Children.vue'
    import ChilCom from './ChilCom.vue'
    export default {
        components: {
            Children,
            ChilCom
        },
        name: 'HelloWorld',
        data() {
            return {
                msg: 'my name iss ',
                msg2: 'mssss from children ',
                childwords: ''
            }
        },
        methods: {
            console() {
                console.log(this.$router)
            },
            change() {
                this.msg = this.msg + 'a _'
            },
            listen(canshu) {
                alert(1)
                this.childwords += canshu
            }
        },
        mounted() {},
        computed: {
            COM: function () {
                return (this.msg + this.$route.params.id).split('').reverse().join('')
            }
        }
    }

</script>
