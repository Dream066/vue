
  Vue.component('like-button', {
    props: ['counter'],
    model: {
      prop: 'counter',
      event: 'counter-change'
    },
    template: '<span><button type="button" @click="increment">&#9829; {{counter}}</button></span>',

    methods: {
      increment() {
        this.$emit('counter-change',this.counter + 1);
      }
    } 

  })
  Vue.component('dislike-button', {
    props: ['counter'],
    model: {
      prop: 'counter',
      event: 'counter-change'
    },

    methods: {
      increment() {
        this.$emit('counter-change',this.counter + 1);
      }
    },

    template: '<span><button type="button" @click ="increment">&#9888; {{counter}}</button></span>'
  })
  Vue.component('task-list', {
    props: ['tasks', 'title'],
    template :
    ` 
    <div>
      <div v-if="!(tasks.length == 0)" class="list"> 
        <h3>{{ title }}</h3>
          <div class="item" :class="{done: task.done}" v-for="task in tasks" :key="task.text">
              <input type="checkbox" checked v-model="task.done">
              {{task.text}} <like-button v-model="task.likes"></like-button><dislike-button v-model="task.dislikes"></dislike-button>
          </div>
      </div>
    </div>
    `
  })
  
var app = new Vue({
  el: '#app',
  data: {
    headerLikes: 2,
    headerDislikes: 2,
    formDislikes: 0,
    formLikes: 3,
    message: 'введите новое дело',
    myGirlInputValue: '',
    inputValue: '',
    tasks: [
      {text: 'Развернуть окружение в Codepen', done: true, likes: 1, dislikes: 1,} ,
      {text: 'Ознакомиться с документацией', done: true, likes: 4, dislikes: 1,},
      {text: 'Сделать домашнее задание', done: false, likes: 5, dislikes: 1,},
    ],

    myGirlTasks: [
      {text: 'приехать в город', done: false},
      {text: 'купить табак для кальяна', done: false},
      {text: 'встретиться со мной', done: false},
    ],
    disabled: true
  },
  computed: {
    count () {
      console.log("count")
      return this.tasks.filter(task => !task.done).length;
    },
    completedTasks() {
      return this.tasks.filter(task => task.done);
    },
    uncompletedTasks() {
      return this.tasks.filter(task => !task.done);
    },
    countMyGirlTasks() {
      return this.myGirlTasks.filter(task => !task.done).length;
    },

    countLikes() {
      return this.headerLikes + this.formLikes + this.tasks.reduce((value,task) => value + task.likes,0);
    }, 
    countDislikes() {
      return this.headerDislikes + this.formDislikes + this.tasks.reduce((value,task) => value + task.dislikes,0);
    }, 
  },
  methods: {
    addTask () {
      this.tasks.push({text: this.inputValue, done:false, likes: 0, dislikes: 0,});
      this.inputValue = '';
    },
    addTaskMyGirl() {
      this.myGirlTasks.push({text: this.myGirlInputValue, done:false});
      this.myGirlInputValue = '';
    },
  
  },
})
