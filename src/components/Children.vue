<template>
    <div class="hello">
        <h1>iam children3333</h1>
        <h1>{{fff}}</h1>
        <p v-on:click="clickMe">222</p>
    </div>
</template>

<script>
    export default {
        name: 'Children',
        data() {
            return {
                mess_to_par:'tototototot'
            }
        },
        props:['fff'],
        methods: {
            console(){
                console.log(this.$router)
                console.log(this.props)
            },
            change(){
                this.msg = this.msg +'a _'
            },
            clickMe(){
                console.log(1)
                this.$emit('listenA',this.mess_to_par)
            }
        },
        mounted () {


        },
        computed: {
            COM:function(){
                return (this.msg+this.$route.params.id).split('').reverse().join('')
            }
        }
    }

</script>
