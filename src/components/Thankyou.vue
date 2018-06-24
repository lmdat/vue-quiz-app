<template>
    <div class="row">
        <div class="col-md-6 offset-md-3 py-2 text-left">
            <p class="lead">Thank you {{this.user_name}}. Your info has been stored!</p>
            <div class="text-center">
                <a href="#" class="link-primary" @click.prevent="navigateToHome()">Home page</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user_name: ''
        }
    },
    methods:{
        navigateToHome(){
            this.$router.push('/')
        }
    },
    created(){
        this.user_name = this.$store.getters.getUserName
        if(this.user_name == '')
            this.$router.push('/')
        else
            this.$store.commit('setUserName', '')
    }
}
</script>

<style>

</style>


