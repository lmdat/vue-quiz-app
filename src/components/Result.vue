<template>
    <form>
    <div class="row">
        <div class="col-md-6 offset-md-3 border py-2 text-left">
            <h4 class="mb-3"><span class="text-success">Your Correct Answer(s):</span> <span class="badge badge-primary">{{total_correct}} / {{total_question}}</span></h4>
            
            <div class="py-2 text-center">
                 <button type="button" class="btn btn-sm btn-outline-primary" @click.prevent="playAgain()">Play Again!</button>

            </div>

            <p class="mt-5 lead">
                Please fill the form below with your name and email if you would like to take part in a raffle.
            </p>
            <div class="pt-2 col-md-12 border">

                <div class="form-group">
                    <label for="your_name">Your Name</label>
                    <input
                        type="text" 
                        class="form-control form-control-sm" 
                        name="your_name" 
                        id="your_name" 
                        placeholder="Your Name" 
                        v-model="your_name"
                        :state="!$v.your_name.$invalid"
                        required>
                    
                </div>
                <div class="form-group">
                    <label for="your_email">Your Email</label>
                    <input
                        type="email" 
                        class="form-control form-control-sm" 
                        name="your_email" 
                        id="your_email" 
                        placeholder="Your Email" 
                        v-model="your_email" 
                        :state="!$v.your_email.$invalid"
                        required>
                    
                </div>
                <div class="form-group">
                    <button 
                        type="button" 
                        class="btn btn-sm btn-info" 
                        @click.prevent="saveUser()"
                        :disabled="$v.$invalid">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </form>
</template>

<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators'

export default {
    data(){
        return {
            total_correct: 0,
            total_question: 0,
            your_name: '',
            your_email: ''
        }
    },
    validations: {
        your_name: {
            required
        },
        your_email: {
            required,
            email
        }
    },
    methods:{
        getResult(){

            let prefix = process.env.VUE_APP_STORAGE_PREFIX

            let answer_list = localStorage.getItem(prefix + 'question_list');
            if(answer_list == null){
                this.$router.push('/')
            }
            else{
                answer_list = JSON.parse(answer_list);

                axios.post(process.env.VUE_APP_BASE_URI + '/result', {
                    answer_list: answer_list
                })
                .then(res => {
                    
                    this.total_correct = res.data.total_correct
                    this.total_question = res.data.total_question
                })
                .catch(e => {
                    console.log(e)
                })
            }

        },
        playAgain(){
            let prefix = process.env.VUE_APP_STORAGE_PREFIX
            localStorage.removeItem(prefix + 'question_list')
            localStorage.removeItem(prefix + 'answer_list')
            this.$router.push('/quiz')
        },
        saveUser(){
            axios.post(process.env.VUE_APP_BASE_URI + '/user', {
                your_name: this.your_name,
                your_email: this.your_email
            })
            .then(res => {
                let prefix = process.env.VUE_APP_STORAGE_PREFIX
                localStorage.removeItem(prefix + 'question_list')
                localStorage.removeItem(prefix + 'answer_list')

                this.$store.commit('setUserName', this.your_name)
                
                this.$router.push('/thankyou')
            })
            .catch(e => {
                console.log(e)
            })
            
        }
    },
    created(){
        this.getResult()
    }
}
</script>

<style>

</style>
