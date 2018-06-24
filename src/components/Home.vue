<template>
    <div class="row">
        <div class="col-md-12 text-center">
            <p class="lead">Welcome to our Quiz</p>
            <router-link to="/quiz" class="btn btn-outline-success">Start Your Quiz!</router-link>
            
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    created(){
        // console.log(process.env.VUE_APP_BASE_URI)
    }
}
</script>
<style>

</style>


