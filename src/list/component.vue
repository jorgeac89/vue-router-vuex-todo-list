<template src="./view.html"></template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex';
  import VuePaginate from 'lib/vue-pagination';
  import mutationTypes from './mutation-types';
  import actionTypes from  './action-types';

  export default {
    name: 'ListComponent',
    data: () => ({
      todosPerPage: 10
    }),
    computed: {
      ...mapState('list', {
        fetching: state => state.fetching,
        fetched: state => state.fetched,
        todos: state => state.todos.slice(
          state.todosPerPage * state.currentPage,
          state.todosPerPage * (state.currentPage + 1)
        ),
        pageCount(state){
          return Math.ceil(state.todos.length / this.todosPerPage);
        },
        currentPage: state => state.currentPage,
        error: state => state.error
      })
    },
    methods: {
      ...mapMutations('list', {
        toggleTodo: mutationTypes.TOGGLE_TODO,
        changePage: mutationTypes.CHANGE_PAGE
      }),
      ...mapActions('list', {
        removeTodo: actionTypes.REMOVE_TODO,
        fetchTodos: actionTypes.FETCH_TODOS
      })
    },
    mounted() {
      if(!this.fetched && !this.fetching){
        this.fetchTodos();
      }
    },
    components: {
      VuePaginate
    }
  }
</script>
