<template>
    <form>
    <div class="row">
        <div class="col-md-6 offset-md-3 border py-2 text-left">
            <p><span class='lead'>Question({{count_question}}/{{total_question}}):</span> {{question.question_text}}</p>
            <p class='lead'>Answer:</p>
            <ul>
                <li v-for="(a, index) in question.answers" :key="index">
                    <div class="form-check">
                        
                        <input class="form-check-input" :id="`answer-${index}`" type="radio" v-model="answer" :value="a.id">
                        <label class="form-check-label" :for="'answer-' + index">{{ a.answer_text }}</label>
                    </div>
                </li>
            </ul>
            <div class="py-2 text-center">
                <button type="button" class="btn btn-sm btn-info" :disabled="answer == 0" @click.prevent="saveAnswer()">Submit</button>
            </div>
        </div>
    </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Quiz',
    data(){
        return {
            question: {},
            answer: 0,
            total_question: 0,
            count_question: 0
        }
    },
    methods:{
        getQuiz(){
            this.answer = 0
            let prefix = process.env.VUE_APP_STORAGE_PREFIX
            let question_list = localStorage.getItem(prefix + 'question_list');
            if(question_list == null){
                question_list = [];
            }
            else{
                question_list = JSON.parse(question_list);
            }

            axios.post(process.env.VUE_APP_BASE_URI + '/quiz', {
                question_list: question_list
            })
            .then(res => {
                this.question = res.data.question
                this.total_question = res.data.total_question
                this.count_question = question_list.length + 1
            })
            .catch(e => {
                console.log(e)
            })

        },
        saveAnswer(){
            let prefix = process.env.VUE_APP_STORAGE_PREFIX
            if(this.answer != 0){

                let question_list = localStorage.getItem(prefix + 'question_list')
                if(question_list == null){
                    question_list = []
                    question_list.push(this.question.id)
                    localStorage.setItem(prefix + 'question_list', JSON.stringify(question_list))
                }
                else{
                    question_list = JSON.parse(question_list)
                    question_list.push(this.question.id)
                    localStorage.setItem(prefix + 'question_list', JSON.stringify(question_list))
                }

                let answer_list = localStorage.getItem(prefix + 'answer_list')
                if(answer_list == null){
                    answer_list = []
                    answer_list.push(this.answer)
                    localStorage.setItem(prefix + 'answer_list', JSON.stringify(answer_list))
                }
                else{
                    answer_list = JSON.parse(answer_list)
                    answer_list.push(this.answer)
                    localStorage.setItem(prefix + 'answer_list', JSON.stringify(answer_list))
                }
                
                question_list = JSON.parse(localStorage.getItem(prefix + 'question_list'));
                if(question_list.length < this.total_question){
                    this.getQuiz()
                }
                else{
                    this.navigateToResult()
                }
                    
            }
        },
        navigateToResult(){
            this.$router.push('/result')
        }
    },
    created(){
        // console.log('Quiz created')
        this.getQuiz()
    }
}
</script>

<style>

</style>

