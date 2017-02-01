const vm = new Vue({
    el: '#root',
    data() {
        return {
            todos: [],
            completed:[],
            todo: ''
        }
    },
    methods: {
        submitTodo(todo) {
            this.todos.push(todo)
            this.todo = ''
        },
        submitCompleted(todo){
            var i = this.todos.indexOf(todo)
            this.todos.splice(i, 1)
            this.completed.push(todo)
        },
         removeTodo(todo){
            var i = this.todos.indexOf(todo)
            this.todos.splice(i, 1)
        }
        
    }
})

